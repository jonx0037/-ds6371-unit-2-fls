# Pocket Cash Analysis: SMU vs. Seattle U

*Part A: Six-Step Analysis Process*

## Step 1: State Hypotheses

- H₀: μ_SMU = μ_Seattle (The mean pocket cash amount is equal between SMU and Seattle U students)
- H₁: μ_SMU ≠ μ_Seattle (The mean pocket cash amount differs between SMU and Seattle U students)

## Step 2: Specify Significance Level

- Using α = 0.05 for a two-tailed test
- Critical value with df = 28 is ±2.042 (from t-distribution)

## Step 3: Calculate Test Statistic

- SMU Mean: $141.63
- Seattle U Mean: $27.00
- Pooled Standard Deviation: $265.47
- Standard Error: $93.86
- t = (141.63 - 27.00)/93.86 = 1.22

## Step 4: Find P-value

- p-value = 0.234 (two-tailed)

## Step 5: Make Decision

- Since |t| = 1.22 < 2.042 and p-value = 0.234 > 0.05, we fail to reject H₀

## Step 6: State Conclusion and Confidence Interval

*Statistical Conclusion*:
There is insufficient evidence to conclude that the mean amount of pocket cash differs between SMU and Seattle University students (t(28) = 1.22, p = 0.234). The 95% confidence interval for the difference in means (SMU—Seattle) is (—$76.09, $305.35).
Scope of Inference:

- Population: Since these were convenience samples from specific classes rather than random samples of all students, results can only be generalized to these specific classes, not the broader student populations.
- Causation: This was an observational study comparing existing groups, not a randomized experiment, so we cannot make causal claims about why any differences might exist.

*Part B: Comparing p-values*:
The t-test p-value (0.234) is more significant than last week's permutation test p-value (0.1371). This difference likely occurs because the t-test makes assumptions about normality and equal variances, while the permutation test is distribution-free. Given the presence of outliers in the SMU data (particularly the $1200 value), the permutation test may provide a more reliable result for this dataset since it doesn't rely on distributional assumptions.