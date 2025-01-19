# Load required libraries
library(ggplot2)
library(tidyverse)
library(gridExtra)
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

# Create the datasets
smu_data <- c(34, 1200, 23, 50, 60, 50, 0, 0, 30, 89, 0, 300, 400, 20, 10, 0)
seattle_data <- c(20, 10, 5, 0, 30, 50, 0, 100, 110, 0, 40, 10, 3, 0)

# Create a data frame for plotting
pocket_cash_df <- data.frame(
  amount = c(smu_data, seattle_data),
  school = factor(c(rep("SMU", length(smu_data)), rep("Seattle U", length(seattle_data))))
)

# Enhanced box plot with dark theme
p1 <- ggplot(pocket_cash_df, aes(x = school, y = amount, fill = school)) +
  geom_boxplot(alpha = 0.7) +
  scale_fill_manual(values = c("SMU" = "#38bdf8", "Seattle U" = "#f87171")) +
  labs(
    title = "Distribution of Pocket Cash by School",
    subtitle = paste("n(SMU) =", length(smu_data), ", n(Seattle) =", length(seattle_data)),
    y = "Amount ($)",
    x = "School"
  ) +
  dark_theme +
  theme(legend.position = "none")

# Enhanced histogram with density curves
p2 <- ggplot(pocket_cash_df, aes(x = amount, fill = school)) +
  geom_histogram(position = "dodge", bins = 15, alpha = 0.7) +
  geom_density(aes(color = school), alpha = 0.3) +
  scale_fill_manual(values = c("SMU" = "#38bdf8", "Seattle U" = "#f87171")) +
  scale_color_manual(values = c("SMU" = "#38bdf8", "Seattle U" = "#f87171")) +
  labs(
    title = "Distribution of Pocket Cash",
    subtitle = "Histogram with Density Curves",
    x = "Amount ($)",
    y = "Count"
  ) +
  dark_theme +
  theme(legend.position = "top")

# Enhanced QQ plots
p3 <- ggplot(subset(pocket_cash_df, school == "SMU"), aes(sample = amount)) +
  stat_qq(color = "#38bdf8") +
  stat_qq_line(color = "#f87171") +
  labs(
    title = "Q-Q Plot: SMU",
    subtitle = paste("W =", round(shapiro.test(smu_data)$statistic, 3),
                     ", p =", round(shapiro.test(smu_data)$p.value, 4))
  ) +
  dark_theme

p4 <- ggplot(subset(pocket_cash_df, school == "Seattle U"), aes(sample = amount)) +
  stat_qq(color = "#38bdf8") +
  stat_qq_line(color = "#f87171") +
  labs(
    title = "Q-Q Plot: Seattle U",
    subtitle = paste("W =", round(shapiro.test(seattle_data)$statistic, 3),
                     ", p =", round(shapiro.test(seattle_data)$p.value, 4))
  ) +
  dark_theme

# Create a density comparison plot
p5 <- ggplot(pocket_cash_df, aes(x = amount, fill = school)) +
  geom_density(alpha = 0.5) +
  scale_fill_manual(values = c("SMU" = "#38bdf8", "Seattle U" = "#f87171")) +
  labs(
    title = "Density Comparison",
    subtitle = "Smoothed Distribution Curves",
    x = "Amount ($)",
    y = "Density"
  ) +
  dark_theme +
  theme(legend.position = "top")

# Create title with dark theme
title <- grid::textGrob("Pocket Cash Analysis Visualizations", 
                        gp = grid::gpar(col = "white", fontsize = 16))

# Arrange plots in grid with dark background
grid.arrange(p1, p2, p3, p4, p5,
             layout_matrix = rbind(c(1,2), c(3,4), c(5,5)),
             top = title,
             heights = c(1, 1, 0.8))

# Save plots with dark theme
ggsave("pocket_cash_analysis_dark.pdf", 
       arrangeGrob(p1, p2, p3, p4, p5,
                   layout_matrix = rbind(c(1,2), c(3,4), c(5,5)),
                   top = title,
                   heights = c(1, 1, 0.8)),
       width = 12, height = 14, 
       bg = "#1a1a1a")

# Print formatted statistical results
cat("\nComprehensive Statistical Analysis of Pocket Cash\n",
    "==============================================\n\n",
    "Summary Statistics:\n",
    sprintf("SMU (n=%d):\n", length(smu_data)),
    sprintf("  Mean: $%.2f\n", mean(smu_data)),
    sprintf("  SD: $%.2f\n", sd(smu_data)),
    sprintf("  Median: $%.2f\n\n", median(smu_data)),
    sprintf("Seattle U (n=%d):\n", length(seattle_data)),
    sprintf("  Mean: $%.2f\n", mean(seattle_data)),
    sprintf("  SD: $%.2f\n", sd(seattle_data)),
    sprintf("  Median: $%.2f\n\n", median(seattle_data)),
    "Two-Sample t-Test Results:\n",
    sprintf("  t = %.3f\n", t_test_result$statistic),
    sprintf("  df = %d\n", t_test_result$parameter),
    sprintf("  p-value = %.4f\n", t_test_result$p.value),
    sprintf("  95%% CI: (%.2f, %.2f)\n\n", 
            t_test_result$conf.int[1], t_test_result$conf.int[2]),
    sprintf("Effect Size (Cohen's d): %.3f\n", cohens_d)
)

