# Load required libraries
library(ggplot2)
library(gridExtra)
library(tidyverse)
library(nortest)  # For additional normality tests
library(moments)  # For skewness and kurtosis tests

# Set up dark theme for all plots
dark_theme <- theme_minimal() +
  theme(
    text = element_text(color = "white"),
    axis.text = element_text(color = "white"),
    axis.title = element_text(color = "white"),
    plot.title = element_text(color = "white", hjust = 0.5),
    plot.subtitle = element_text(color = "#cccccc", hjust = 0.5),
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

# Calculate comprehensive summary statistics
summary_stats <- data.frame(
  n = length(bat_data$weight),
  mean = mean(bat_data$weight),
  median = median(bat_data$weight),
  sd = sd(bat_data$weight),
  se = sd(bat_data$weight)/sqrt(length(bat_data$weight)),
  skewness = skewness(bat_data$weight),
  kurtosis = kurtosis(bat_data$weight),
  t_stat = (mean(bat_data$weight) - 1.8)/(sd(bat_data$weight)/sqrt(length(bat_data$weight)))
)

# Additional Statistical Tests
# Shapiro-Wilk test for normality
sw_test <- shapiro.test(bat_data$weight)
# Anderson-Darling test for normality
ad_test <- ad.test(bat_data$weight)
# One-sample t-test
t_test_result <- t.test(bat_data$weight, mu = 1.8)
# Sign test for median
sign_test <- binom.test(
  sum(bat_data$weight > 1.8),
  length(bat_data$weight),
  p = 0.5,
  alternative = "two.sided"
)

# Create QQ Plot with annotations
qq_plot <- ggplot(bat_data, aes(sample = weight)) +
  stat_qq(color = "#38bdf8") + 
  stat_qq_line(color = "#f87171") +
  labs(title = "Normal Q-Q Plot of Bumblebee Bat Weights",
       subtitle = paste("Shapiro-Wilk p-value:", round(sw_test$p.value, 4)),
       x = "Theoretical Quantiles",
       y = "Sample Quantiles") +
  annotate("text", x = -1, y = max(bat_data$weight),
           label = paste("Skewness:", round(summary_stats$skewness, 3)),
           color = "white", hjust = 0) +
  annotate("text", x = -1, y = max(bat_data$weight) - 0.1,
           label = paste("Kurtosis:", round(summary_stats$kurtosis, 3)),
           color = "white", hjust = 0) +
  dark_theme

# Create Enhanced Histogram with density curve
hist_plot <- ggplot(bat_data, aes(x = weight)) +
  geom_histogram(aes(y = ..density..), binwidth = 0.1, 
                 fill = "#38bdf8", color = "black", alpha = 0.7) +
  geom_density(color = "#f87171", linewidth = 1) +
  geom_vline(xintercept = mean(bat_data$weight), 
             color = "#818cf8", linetype = "dashed", linewidth = 1) +
  geom_vline(xintercept = 1.8, 
             color = "#f87171", linetype = "dashed", linewidth = 1) +
  annotate("text", x = mean(bat_data$weight), y = max(density(bat_data$weight)$y),
           label = paste("x̄ =", round(mean(bat_data$weight), 3)),
           color = "white", hjust = -0.2) +
  annotate("text", x = 1.8, y = max(density(bat_data$weight)$y) * 0.9,
           label = "H₀: μ = 1.8",
           color = "#f87171", hjust = -0.2) +
  labs(title = "Distribution of Bumblebee Bat Weights",
       subtitle = paste("n =", length(bat_data$weight), ", SD =", round(sd(bat_data$weight), 3)),
       x = "Weight (grams)",
       y = "Density") +
  dark_theme

# Create enhanced t-distribution plot
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
  annotate("text", x = t_stat, y = max(t_dens) * 0.8,
           label = paste("t =", round(t_stat, 3)),
           color = "white") +
  annotate("text", x = -t_crit, y = max(t_dens) * 0.6,
           label = paste("t_crit = ±", round(t_crit, 3)),
           color = "#f87171") +
  labs(title = "t-Distribution with Critical Regions",
       subtitle = paste("p-value =", round(t_test_result$p.value, 4)),
       x = "t-value",
       y = "Density") +
  dark_theme

# Create enhanced residual plot
residuals <- bat_data$weight - mean(bat_data$weight)
fitted_values <- rep(mean(bat_data$weight), length(bat_data$weight))

residual_plot <- ggplot(data.frame(fitted = fitted_values, residuals = residuals), 
                        aes(x = fitted, y = residuals)) +
  geom_point(color = "#38bdf8") +
  geom_hline(yintercept = 0, linetype = "dashed", color = "#f87171") +
  geom_smooth(method = "loess", color = "#818cf8", se = TRUE, fill = "#818cf8", alpha = 0.2) +
  annotate("text", x = mean(fitted_values), y = max(residuals),
           label = paste("SD of residuals:", round(sd(residuals), 3)),
           color = "white") +
  labs(title = "Residual Plot",
       subtitle = "Check for patterns",
       x = "Fitted Values",
       y = "Residuals") +
  dark_theme

# Arrange all plots in a grid with title
grid.arrange(qq_plot, hist_plot, t_plot, residual_plot,
             ncol = 2,
             top = grid::textGrob("Bumblebee Bat Weight Analysis", 
                                  gp = grid::gpar(col = "white", fontsize = 16)))

# Print comprehensive statistical summary
cat("\nComprehensive Statistical Analysis of Bumblebee Bat Weights\n")
cat("=======================================================\n\n")

cat("Basic Summary Statistics:\n")
cat("-----------------------\n")
cat("Sample Size:", summary_stats$n, "\n")
cat("Mean:", round(summary_stats$mean, 3), "grams\n")
cat("Median:", round(summary_stats$median, 3), "grams\n")
cat("Standard Deviation:", round(summary_stats$sd, 3), "grams\n")
cat("Standard Error:", round(summary_stats$se, 3), "grams\n")
cat("Skewness:", round(summary_stats$skewness, 3), "\n")
cat("Kurtosis:", round(summary_stats$kurtosis, 3), "\n\n")

cat("Normality Tests:\n")
cat("---------------\n")
cat("Shapiro-Wilk Test:\n")
cat("  W =", round(sw_test$statistic, 4), "\n")
cat("  p-value =", round(sw_test$p.value, 4), "\n\n")

cat("Anderson-Darling Test:\n")
cat("  A =", round(ad_test$statistic, 4), "\n")
cat("  p-value =", round(ad_test$p.value, 4), "\n\n")

cat("One-Sample t-Test Results:\n")
cat("------------------------\n")
cat("H₀: μ = 1.8 grams\n")
cat("t-statistic:", round(t_test_result$statistic, 3), "\n")
cat("degrees of freedom:", t_test_result$parameter, "\n")
cat("p-value:", round(t_test_result$p.value, 4), "\n")
cat("95% CI:", round(t_test_result$conf.int[1], 3), "to", 
    round(t_test_result$conf.int[2], 3), "grams\n\n")

cat("Sign Test Results:\n")
cat("----------------\n")
cat("H₀: median = 1.8 grams\n")
cat("Number of values > 1.8:", sign_test$statistic, "\n")
cat("p-value:", round(sign_test$p.value, 4), "\n")

