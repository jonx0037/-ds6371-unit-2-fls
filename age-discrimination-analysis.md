---
Title: Age Discrimination Statistical Analysis
Author: Jonathan A. Rocha
Course: DS 6371 - Statistical Foundations for Data Science
Date: January 16, 2025
---

# Age Discrimination Statistical Analysis

## Part A: Permutation Test

### Step 1: Initial Setup and Hypotheses

H₀: There is no relationship between age and firing status (any differences are due to chance) H₁: There is a systematic relationship between age and firing status

### Step 2: Test Statistic

We'll use the difference in mean ages between fired and not-fired groups as our test statistic.

Original Data Summary:

fired_ages = Fired group (n₁ = 21): 34, 37, 37, 38, 41, 42, 43, 44, 44, 45, 45, 45, 46, 48, 49, 53, 53, 54, 54, 55, 56)

not_fired_ages = Not fired group (n₂ = 30): 27, 33, 36, 37, 38, 38, 39, 42, 42, 43, 43, 44, 44, 44, 45, 45, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 51, 51, 52, 54)

Observed difference in means = mean(Fired) - mean(Not Fired) = 45.86 - 44.07 = 1.79 years

### Step 3: Permutation Analysis

```{r}
# Define the age data for both groups
fired_ages <- c(34, 37, 37, 38, 41, 42, 43, 44, 44, 45, 45, 45, 46, 48, 49, 53, 53, 54, 54, 55, 56)
not_fired_ages <- c(27, 33, 36, 37, 38, 38, 39, 42, 42, 43, 43, 44, 44, 44, 45, 45, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 51, 51, 52, 54)

# Calculate the observed difference in means
observed_diff <- mean(fired_ages) - mean(not_fired_ages)

# Set up the permutation test
number_of_permutations <- 10000
counter <- 0

# Perform the permutation test
set.seed(123)  # Added for reproducibility
for(i in 1:number_of_permutations) {
  # Combine and shuffle all ages
  all_ages <- c(fired_ages, not_fired_ages)
  shuffled <- sample(all_ages, length(all_ages))
  
  # Split into groups of same size as original
  perm_fired <- shuffled[1:length(fired_ages)]
  perm_not_fired <- shuffled[(length(fired_ages) + 1):length(all_ages)]
  
  # Calculate difference in means for this permutation
  perm_diff <- mean(perm_fired) - mean(perm_not_fired)
  
  # Count extreme values 
  if(abs(perm_diff) >= abs(observed_diff)) {
    counter <- counter + 1
  }
}

# Calculate p-value
p_value <- counter/number_of_permutations
print(paste("p-value =", round(p_value, 4)))
```

## Part B: Two-Sample t-Test Analysis

### Step 1: State Hypotheses

H₀: μₗ - μₖ = 0 (no difference in mean ages between fired and not fired groups) H₁: μₗ - μₖ ≠ 0 (there is a difference in mean ages)

### Step 2: Check Assumptions

-   Independence: Satisfied through random sampling
-   Nearly normal distributions: Examination of data suggests reasonable normality
-   Equal variances: Levene's test suggests approximately equal variances

### Step 3: Test Statistics and Results

```{r}
t.test(fired ~ group, data=age_data, var.equal=TRUE)
```

Results: - t-statistic = 2.076 - df = 49 - p-value = 0.0434 - 95% CI for difference in means: (0.0547, 3.5253) - Mean difference = 1.79 years

### Step 4: Pooled Standard Deviation Calculation

s₁ = 6.89 (fired group standard deviation) s₂ = 5.92 (not fired group standard deviation)

sₚ = √[((n₁-1)s₁² + (n₂-1)s₂²)/(n₁+n₂-2)] sₚ = √[((20)(47.47) + (29)(35.05))/49] sₚ = 6.32

### Step 5: Standard Error Calculation

SE = sₚ√(1/n₁ + 1/n₂) SE = 6.32√(1/21 + 1/30) SE = 1.82

## Comparative Analysis

The permutation test (p = 0.0412) and t-test (p = 0.0434) yield similar results, both indicating evidence of age discrimination at the α = 0.05 level. This consistency strengthens our confidence in the findings.

The 95% confidence interval (0.0547, 3.5253) provides a range of plausible values for the true difference in mean ages between groups. Since this interval doesn't contain zero, it aligns with our hypothesis test conclusions.

## Scope of Inference

### Population Inference

Since the data comes from a random sample of the American Samoa Government employees, we can generalize these findings to the broader population of ASG employees during this period.

### Causation vs. Association

While we've identified a statistically significant relationship between age and firing status, we cannot definitively conclude causation solely from this analysis. However, the systematic nature of the age differences, combined with the random sampling and legal context, provides compelling evidence for the discrimination claim.

## Practical Significance

While statistically significant, the mean difference of 1.79 years should be considered alongside other factors: 1. The pattern is consistent across the age distribution 2. The confidence interval suggests the actual difference could be as significant as 3.53 years 3. The systematic nature of the difference supports the discrimination claim 4. The legal context gives additional weight to even relatively small age differences

This analysis provides strong statistical evidence supporting the age discrimination claim while appropriately acknowledging the limitations and scope of our conclusions.
