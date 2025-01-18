---
title: "Statistical Analysis of Bumblebee Bat Weights"
author: "Jonathan A. Rocha"
date: "January 19, 2025"
output:
  html_document:
    toc: true
    toc_float: true
    theme: cerulean
    highlight: tango
    df_print: paged
  pdf_document:
    toc: true
    highlight: tango
course: "DS 6371 - Statistics for Data Science"
professors: "Dr. Bivin Sadler & Dr. Monnie McGee"
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(
  echo = TRUE,
  warning = FALSE,
  message = FALSE,
  fig.width = 10,
  fig.height = 6
)

# Load required libraries
library(tidyverse)
library(ggplot2)
library(gridExtra)
library(nortest)
library(moments)
```

# Introduction

This analysis examines weight measurements from a sample of Kitti's hog-nosed bats (bumblebee bats), recognized as the world's smallest mammals. We will test whether these measurements support the claim that these bats come from a population with a mean weight of 1.8g.

`Data Import and Initial Processing`

```{r data_import}
# Input the bumblebee bat weight data
bat_weights <- c(1.7, 1.6, 1.5, 2.0, 2.3, 1.6, 1.6, 1.8, 1.5, 1.7, 
                 1.2, 1.4, 1.6, 1.6, 1.6)

# Calculate comprehensive summary statistics
summary_stats <- data.frame(
  n = length(bat_weights),
  mean = mean(bat_weights),
  median = median(bat_weights),
  sd = sd(bat_weights),
  se = sd(bat_weights)/sqrt(length(bat_weights)),
  skewness = skewness(bat_weights),
  kurtosis = kurtosis(bat_weights)
)

# Display summary statistics
knitr::kable(summary_stats, digits = 3,
             caption = "Summary Statistics of Bat Weights")
```

## Six-Step Hypothesis Test

### Step 1: State Hypotheses

Let μ represent the true mean weight of the bumblebee bat population.

H₀: μ = 1.8g (The population mean weight equals 1.8 grams)\
H₁: μ ≠ 1.8g (The population mean weight differs from 1.8 grams)

### Step 2: Verify Assumptions and Set Significance Level

Before proceeding with the analysis, we need to verify the following assumptions:

1.  Independence of observations
2.  Data is quantitative
3.  Population distribution is approximately normal

### Testing Normality

```{r normality_check, fig.height=8}
# Create QQ Plot
qq_plot <- ggplot(data.frame(bat_weights), aes(sample = bat_weights)) +
  stat_qq() +
  stat_qq_line(color = "red") +
  labs(title = "Normal Q-Q Plot of Bat Weights",
       x = "Theoretical Quantiles",
       y = "Sample Quantiles")

# Create Histogram
hist_plot <- ggplot(data.frame(bat_weights), aes(x = bat_weights)) +
  geom_histogram(aes(y = ..density..), bins = 8, 
                fill = "skyblue", color = "black", alpha = 0.7) +
  geom_density(color = "red") +
  geom_vline(xintercept = mean(bat_weights), 
             color = "blue", linetype = "dashed") +
  labs(title = "Distribution of Bat Weights",
       x = "Weight (grams)",
       y = "Density")

# Arrange plots
grid.arrange(qq_plot, hist_plot, ncol = 1)

# Perform Shapiro-Wilk test
sw_test <- shapiro.test(bat_weights)
print(paste("Shapiro-Wilk test p-value:", round(sw_test$p.value, 4)))
```

The Q-Q plot shows points following the diagonal line reasonably well, and the Shapiro-Wilk test (p = `r round(sw_test$p.value, 4)`) suggests no significant departure from normality. We set α = 0.05 for our significance level.

## Step 3: Calculate Test Statistic

```{r test_statistic}
# Calculate t-statistic
t_stat <- (mean(bat_weights) - 1.8)/(sd(bat_weights)/sqrt(length(bat_weights)))
df <- length(bat_weights) - 1

# Create t-distribution visualization
t_vals <- seq(-4, 4, length.out = 100)
t_dens <- dt(t_vals, df)
t_data <- data.frame(t = t_vals, density = t_dens)

ggplot(t_data, aes(x = t, y = density)) +
  geom_line() +
  geom_vline(xintercept = t_stat, color = "red", linetype = "dashed") +
  geom_vline(xintercept = c(-qt(0.975, df), qt(0.975, df)), 
             color = "blue", linetype = "dotted") +
  labs(title = "t-Distribution with Test Statistic",
       x = "t-value",
       y = "Density") +
  annotate("text", x = t_stat, y = max(t_dens)/2,
           label = paste("t =", round(t_stat, 3)))
```

## Step 4: Calculate p-value

```{r p_value}
# Calculate two-sided p-value
p_value <- 2 * pt(abs(t_stat), df = df, lower.tail = FALSE)

print(paste("t-statistic:", round(t_stat, 3)))
print(paste("p-value:", round(p_value, 4)))
```

## Step 5: Make Decision

We reject the null hypothesis since p-value = `r round(p_value, 4)` \< α = 0.05.

## Step 6: State Conclusion

```{r confidence_interval}
# Calculate 95% confidence interval
t_crit <- qt(0.975, df)
margin_error <- t_crit * sd(bat_weights)/sqrt(length(bat_weights))
ci <- c(mean(bat_weights) - margin_error, mean(bat_weights) + margin_error)
```

There is sufficient evidence to conclude that the true mean weight of bumblebee bats differs from 1.8 grams (t(`r df`) = `r round(t_stat, 3)`, p = `r round(p_value, 4)`). The 95% confidence interval for the true mean weight is (`r round(ci[1], 3)`, `r round(ci[2], 3)`) grams.

## Summary Statistics of Bat Weights

### Discussion and Scope of Inference

The statistical analysis provides strong evidence that the true mean weight of bumblebee bats differs from 1.8 grams. However, several important considerations should be noted:

1.  The sample size (n = 15) is relatively small, which could affect the precision of our estimates.
2.  While our data meets the normality assumption, a larger sample would provide more robust conclusions.
3.  The scope of inference depends on the sampling methodology, which wasn't specified in the original problem.

### Appendix: Diagnostic Plots

```{r diagnostic_plots, fig.height=10}
# Create a residual plot
residuals <- bat_weights - mean(bat_weights)
fitted_values <- rep(mean(bat_weights), length(bat_weights))

residual_plot <- ggplot(data.frame(fitted = fitted_values, residuals = residuals),
                       aes(x = fitted, y = residuals)) +
  geom_point() +
  geom_hline(yintercept = 0, linetype = "dashed", color = "red") +
  labs(title = "Residual Plot",
       x = "Fitted Values",
       y = "Residuals")

# Arrange all diagnostic plots
grid.arrange(qq_plot, hist_plot, residual_plot, ncol = 1)
```
