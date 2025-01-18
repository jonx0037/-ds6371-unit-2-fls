# Load required libraries
library(ggplot2)
library(gridExtra)
library(tidyverse)

# Set up dark theme for all plots
dark_theme <- theme_minimal() +
  theme(
    text = element_text(color = "white"),
    axis.text = element_text(color = "white"),
    axis.title = element_text(color = "white"),
    plot.title = element_text(color = "white", hjust = 0.5),
    plot.background = element_rect(fill = "#1a1a1a", color = NA),
    panel.background = element_rect(fill = "#1a1a1a", color = NA),
    panel.grid.major = element_line(color = "#333333"),
    panel.grid.minor = element_line(color = "#2b2b2b"),
    legend.background = element_rect(fill = "#1a1a1a"),
    legend.text = element_text(color = "white"),
    legend.title = element_text(color = "white")
  )

# Create data frame
bat_data <- data.frame(
  weight = c(1.7, 1.6, 1.5, 2.0, 2.3, 1.6, 1.6, 1.8, 1.5, 1.7, 1.2, 1.4, 1.6, 1.6, 1.6)
)

# Calculate summary statistics
summary_stats <- data.frame(
  n = length(bat_data$weight),
  mean = mean(bat_data$weight),
  sd = sd(bat_data$weight),
  se = sd(bat_data$weight)/sqrt(length(bat_data$weight)),
  t_stat = (mean(bat_data$weight) - 1.8)/(sd(bat_data$weight)/sqrt(length(bat_data$weight)))
)

# Create QQ Plot
qq_plot <- ggplot(bat_data, aes(sample = weight)) +
  stat_qq(color = "#38bdf8") + 
  stat_qq_line(color = "#f87171") +
  labs(title = "Normal Q-Q Plot of Bumblebee Bat Weights",
       x = "Theoretical Quantiles",
       y = "Sample Quantiles") +
  dark_theme

# Create Histogram with density curve
hist_plot <- ggplot(bat_data, aes(x = weight)) +
  geom_histogram(aes(y = ..density..), binwidth = 0.1, 
                fill = "#38bdf8", color = "black", alpha = 0.7) +
  geom_density(color = "#f87171", linewidth = 1) +
  geom_vline(xintercept = mean(bat_data$weight), 
             color = "#818cf8", linetype = "dashed", linewidth = 1) +
  geom_vline(xintercept = 1.8, 
             color = "#f87171", linetype = "dashed", linewidth = 1) +
  labs(title = "Distribution of Bumblebee Bat Weights",
       x = "Weight (grams)",
       y = "Density") +
  dark_theme

# Create t-distribution plot
t_stat <- summary_stats$t_stat
df <- summary_stats$n - 1
t_crit <- qt(0.975, df)

t_vals <- seq(-4, 4, length.out = 1000)
t_dens <- dt(t_vals, df)
t_dist_data <- data.frame(t = t_vals, density = t_dens)

t_plot <- ggplot(t_dist_data, aes(x = t, y = density)) +
  geom_line(color = "#38bdf8") +
  geom_vline(xintercept = c(-t_crit, t_crit), 
             color = "#f87171", linetype = "dashed") +
  geom_vline(xintercept = t_stat, 
             color = "#818cf8", linetype = "solid") +
  geom_ribbon(data = subset(t_dist_data, t <= -t_crit | t >= t_crit),
              aes(ymax = density, ymin = 0), 
              fill = "#f87171", alpha = 0.2) +
  labs(title = "t-Distribution with Critical Regions",
       x = "t-value",
       y = "Density") +
  dark_theme

# Calculate confidence interval
ci <- t.test(bat_data$weight, mu = 1.8)$conf.int

# Create residual plot
residuals <- bat_data$weight - mean(bat_data$weight)
fitted_values <- rep(mean(bat_data$weight), length(bat_data$weight))

residual_plot <- ggplot(data.frame(fitted = fitted_values, residuals = residuals), 
                       aes(x = fitted, y = residuals)) +
  geom_point(color = "#38bdf8") +
  geom_hline(yintercept = 0, linetype = "dashed", color = "#f87171") +
  labs(title = "Residual Plot",
       x = "Fitted Values",
       y = "Residuals") +
  dark_theme

# Arrange all plots in a grid
grid.arrange(qq_plot, hist_plot, t_plot, residual_plot,
            ncol = 2,
            top = grid::textGrob("Bumblebee Bat Weight Analysis", 
                               gp = grid::gpar(col = "white", fontsize = 16)))

# Print statistical summary
cat("\nSummary Statistics:\n")
cat("Sample Size:", summary_stats$n, "\n")
cat("Mean:", round(summary_stats$mean, 3), "grams\n")
cat("Standard Deviation:", round(summary_stats$sd, 3), "grams\n")
cat("Standard Error:", round(summary_stats$se, 3), "grams\n")
cat("t-statistic:", round(summary_stats$t_stat, 3), "\n")
cat("p-value:", round(2 * pt(-abs(summary_stats$t_stat), df), 4), "\n")
cat("95% CI:", round(ci[1], 3), "to", round(ci[2], 3), "grams\n")

