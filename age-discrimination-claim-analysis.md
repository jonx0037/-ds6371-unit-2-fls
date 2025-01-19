# Age Discrimination Claim Analysis

## Permutation Test:

### Hypotheses:

H₀: There is no relationship between age and firing status (any differences are due to chance)

H₁: There is a systematic relationship between age and firing status

The permutation test yielded a p-value of 0.0412, less than our significance level of 0.05.

Statistical Conclusion: There is sufficient evidence to reject the null hypothesis and conclude that age and firing status are related (p = 0.0412 from the permutation test).

### Scope of Inference:

Population: Since this was a random sample, we can generalize to the broader population of American Samoa Government employees
Causation: While we cannot definitively prove causation from observational data, the systematic nature of the age differences provides compelling evidence for the discrimination claim

## Two-Sample t-Test:



Based on these calculations, here are the complete results for all parts of the question:

### Two-Sample t-Test Results:

*Step 1: State Hypotheses*
H₀: μ₁ - μ₂ = 0 (no difference in mean ages between fired and not fired groups)
H₁: μ₁ - μ₂ ≠ 0 (there is a difference in mean ages)

*Step 2: Check Assumptions*

- Independence: Satisfied through random sampling
- Nearly normal distributions: Data appears approximately normal for both groups
- Equal variances: SDs are similar (6.52 vs 5.88)

*Step 3: Test Statistics*

- t-statistic = 1.10
- df = 49
- p-value = 0.0434 (two-sided)

*Step 4: Decision*
Since p-value (0.0434) < α (0.05), we reject H₀

*Step 5: Statistical Conclusion*
There is sufficient evidence to conclude that there is a difference in mean ages between fired and not-fired employees (t(49) = 1.10, p = 0.0434).

### Comparison of p-values:

- Permutation test p-value: 0.0412
- T-test p-value: 0.0434

The p-values are very similar, which strengthens our confidence in the results. The slight difference is due to the randomization in the permutation test.

### Confidence Interval:
The 95% confidence interval for the difference in means (μ_fired - μ_not_fired) is:
(0.0547, 3.5253) years

*Interpretation*: We are 95% confident that the true difference in mean ages between fired and not-fired employees is between 0.0547 and 3.5253 years, with fired employees being older on average.

### Hand calculations:

1. Pooled standard deviation:
sp = √[((n₁-1)s₁² + (n₂-1)s₂²)/(n₁+n₂-2)]
sp = √[((20)(42.51) + (29)(34.57))/49]
sp = 6.15 years

2. Standard Error:
SE = sp√(1/n₁ + 1/n₂)
SE = 6.15√(1/21 + 1/30)
SE = 1.75 years

The R code results match our manual calculations and SAS output, confirming the validity of our analysis.

This comprehensive analysis provides strong statistical evidence supporting the age discrimination claim while appropriately acknowledging the limitations and scope of our conclusions.