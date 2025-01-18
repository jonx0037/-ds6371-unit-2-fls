# Load required libraries
library(ggplot2)
library(gridExtra)
library(tidyverse)

# Create data frame
bat_data <- data.frame(
  weight = c(1.7, 1.6, 1.5, 2.0, 2.3, 1.6, 1.6, 1.8, 1.5, 1.7, 1.2, 1.4, 1.6, 1.6, 1.6)
)

# 1. Create QQ Plot for normality check
qq_plot <- ggplot(bat_data, aes(sample = weight)) +
  stat_qq() + 
  stat_qq_line(color = "red") +
  labs(title = "Normal Q-Q Plot of Bumblebee Bat Weights",
       x = "Theoretical Quantiles",
       y = "Sample Quantiles") +
  theme_minimal() +
  theme(plot.title = element_text(hjust = 0.5))

# 2. Create Histogram with density curve
hist_plot <- ggplot(bat_data, aes(x = weight)) +
  geom_histogram(aes(y = after_stat(density)), binwidth = 0.1, 
                fill = "skyblue", color = "black", alpha = 0.7) +
  geom_density(color = "red", linewidth = 1) +
  geom_vline(xintercept = mean(bat_data$weight), 
             color = "blue", linetype = "dashed", linewidth = 1) +
  geom_vline(xintercept = 1.8, 
             color = "red", linetype = "dashed", linewidth = 1) +
  labs(title = "Distribution of Bumblebee Bat Weights",
       x = "Weight (grams)",
       y = "Density") +
  theme_minimal() +
  theme(plot.title = element_text(hjust = 0.5))

# 3. Create t-distribution plot with critical regions
t_stat <- (mean(bat_data$weight) - 1.8)/(sd(bat_data$weight)/sqrt(length(bat_data$weight)))
df <- length(bat_data$weight) - 1
t_crit <- qt(0.975, df)

# Create sequence of t-values
t_vals <- seq(-4, 4, length.out = 1000)
t_dens <- dt(t_vals, df)

t_dist_data <- data.frame(t = t_vals, density = t_dens)

t_plot <- ggplot(t_dist_data, aes(x = t, y = density)) +
  geom_line() +
  geom_vline(xintercept = c(-t_crit, t_crit), 
             color = "red", linetype = "dashed") +
  geom_vline(xintercept = t_stat, 
             color = "blue", linetype = "solid") +
  geom_ribbon(data = subset(t_dist_data, t <= -t_crit | t >= t_crit),
              aes(ymax = density, ymin = 0), 
              fill = "red", alpha = 0.2) +
  labs(title = "t-Distribution with Critical Regions",
       x = "t-value",
       y = "Density") +
  theme_minimal() +
  theme(plot.title = element_text(hjust = 0.5))

# Arrange all plots in a grid
grid.arrange(qq_plot, hist_plot, t_plot, 
            ncol = 2,
            top = "Bumblebee Bat Weight Analysis Visualizations")

# Save the plots if needed
ggsave("bumblebee_analysis_plots.pdf", 
       arrangeGrob(qq_plot, hist_plot, t_plot, ncol = 2),
       width = 12, height = 8)

# Add residual plot
t_test_result <- t.test(bat_data$weight, mu = 1.8)
residuals <- bat_data$weight - mean(bat_data$weight)
fitted_values <- rep(mean(bat_data$weight), length(bat_data$weight))

residual_plot <- ggplot(data.frame(fitted = fitted_values, residuals = residuals), 
                       aes(x = fitted, y = residuals)) +
  geom_point() +
  geom_hline(yintercept = 0, linetype = "dashed", color = "red") +
  labs(title = "Residual Plot",
       x = "Fitted Values",
       y = "Residuals") +
  theme_minimal() +
  theme(plot.title = element_text(hjust = 0.5))

# Update grid with residual plot
grid.arrange(qq_plot, hist_plot, t_plot, residual_plot,
            ncol = 2,
            top = "Bumblebee Bat Weight Analysis Visualizations")

# Save updated plots
ggsave("bumblebee_analysis_plots_with_residuals.pdf",
       arrangeGrob(qq_plot, hist_plot, t_plot, residual_plot, ncol = 2),
       width = 12, height = 10)

