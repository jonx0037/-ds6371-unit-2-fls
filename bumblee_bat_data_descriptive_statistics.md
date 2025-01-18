---
editor_options: 
  markdown: 
    wrap: 72
---

------------------------------------------------------------------------

Title: Bumblebee Bat Data Descriptive Statistics Author: Jonathan A.
Rocha Course: DS 6371 - Statistics for Data Science Professors: Dr.
Bivin Sadler & Dr. Monnie McGee Date: January 18, 2025 Output: word ---

# Load required data

```{r}
bat_weights <- c(1.7, 1.6, 1.5, 2.0, 2.3, 1.6, 1.6, 1.8, 1.5, 1.7, 1.2, 1.4, 1.6, 1.6, 1.6)
```

## Step 1: State Hypotheses

-   H₀: μ = 1.8 grams
-   H₁: μ ≠ 1.8 grams

## Step 2: Significance Level

```{r}
alpha <- 0.05  # Two-tailed test
df <- length(bat_weights) - 1
t_crit <- qt(1 - alpha/2, df)  # Critical value for two-tailed test
```

## Step 3: Calculate Test Statistic

```{r}
sample_mean <- mean(bat_weights)
sample_sd <- sd(bat_weights)
n <- length(bat_weights)
se <- sample_sd/sqrt(n)
t_stat <- (sample_mean - 1.8)/se
```

## Step 4: Calculate p-value

```{r}
p_value <- 2 * pt(-abs(t_stat), df)  # Two-tailed p-value
```

## Step 5: Decision

-   \|t_stat\| = 2.346 \> t_crit = 2.145, so reject H₀
-   p-value = 0.034 \< α = 0.05, confirming rejection

## Step 6: Confidence Interval

```{r}
ci <- t.test(bat_weights, mu = 1.8)$conf.int
```

## Print results

```{r}
cat("Summary Statistics:\n")
cat("Sample Mean:", round(sample_mean, 3), "g\n")
cat("Sample SD:", round(sample_sd, 3), "g\n")
cat("Standard Error:", round(se, 3), "g\n")
cat("\nTest Statistics:\n")
cat("t-statistic:", round(t_stat, 3), "\n")
cat("p-value:", round(p_value, 3), "\n")
cat("95% CI: (", round(ci[1], 3), ",", round(ci[2], 3), ")\n")
```

Statistical Conclusion: There is sufficient evidence to conclude that
the true mean weight of bumblebee bats differs from 1.8 grams (t(14) =
-2.346, p = 0.034). The sample mean of 1.647g and 95% confidence
interval (1.507, 1.787) suggest that bumblebee bats in this population
tend to be lighter than 1.8 grams on average.

Scope of Inference: This sample appears to be from a wild population of
bumblebee bats. If proper random sampling was used, these results may
generalize to the broader species population, though environmental
factors could affect weight distributions in different regions.
