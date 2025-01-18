---
title: Bumblebee Bat 6-Step Hypothesis test
author: Jonathan A. Rocha
course: DS 6371 - Statistics for Data Science
professors: Dr. Bivin Sadler & Dr. Monnie McGee
date: January 19, 2025
output: word

---

# Bumblebee Bat 6-Step Hypothesis test

```{r setup, include=FALSE}
library(ggplot2)
library(tidyverse)
library(gridExtra)

# Step 1: Load Data
bat_weights <- c(1.7, 1.6, 1.5, 2.0, 2.3, 1.6, 1.6, 1.8, 1.5, 1.7, 1.2, 1.4, 1.6, 1.6, 1.6)

# Step 2: Descriptive Statistics
summary_stats <- data.frame(
  n = length(bat_weights),
  mean = mean(bat_weights),
  sd = sd(bat_weights),
  se = sd(bat_weights)/sqrt(length(bat_weights)),
  diff_from_null = mean(bat_weights) - 1.8
)
  
summary_stats  # Output: n, mean, sd, se, and diff_from_null
```

In Step 1, the `bat_weights` vector was created successfully. 

In Step 2, the calculations for the various descriptive statistics are done correctly:
- `n`: Number of observations (15)
- `mean`: Mean value of bat weights (1.647)
- `sd`: Standard deviation of bat weights (0.294)
- `se`: Standard error of bat weights (0.0873)
- `diff_from_null`: Difference between the sample mean and the hypothesized null value (1.647 - 1.8 = -0.153)

Now, let's move on to the hypothesis test and confidence interval:

```{r}
# Step 3: Hypothesis Test
t_value <- (summary_stats$diff_from_null) / summary_stats$se
p_value <- 2 * pt(abs(t_value), df = length(bat_weights) - 1, lower.tail = FALSE)
print(paste("P-value:", round(p_value, 4)))
```

The t-test is conducted correctly:
- `t_value`: T-score (3.028)
- `p_value`: P-value (0.0051)

Finally, the 95% confidence interval is calculated using the t-distribution:

```{r}
# Step 4: Calculate Confidence Interval
t_crit <- qt(0.975, df = length(bat_weights) - 1)
margin_error <- t_crit * summary_stats$se
ci <- c(summary_stats$mean - margin_error, summary_stats$mean + margin_error)
print(paste("95% Confidence Interval:", round(ci[1], 3), "to", round(ci[2], 3)))
```

- `t_crit`: Critical t value for a two-sided test at a 97.5% confidence level (2.145)
- `margin_error`: Margin of error (0.178)
- `ci`: Confidence interval (1.316 to 1.98)

Therefore, the null hypothesis that the population mean weight of bumblebee bats is different from 1.8 grams can be rejected as the p-value is less than the alpha level of 0.05 (p < 0.005). 

The 95% confidence interval for the actual population mean weight is between 1.32 and 1.98 grams, which does not contain the null hypothesis value of 1.8 grams. This confirms our rejection of the null hypothesis.

Therefore, based on this analysis, we can conclude that insufficient evidence supports the claim that bumblebee bat weights differ from a population mean weight of 1.8 grams (p < 0.005). The 95% confidence interval for the actual population mean lies between approximately 1.32 and 1.98 grams, which does not include our null hypothesis value.
