# Beach Comber Statistical Analysis

## Confidence Interval Construction

Using the sample data (25, 19, 37, 29, 40, 28, 31) from the Beach Comber patrons, we can construct a 95% confidence interval for the mean age. This example illustrates two key approaches: one using the t-distribution when σ is unknown (the realistic scenario) and one using the z-distribution when σ is known (the theoretical scenario).

### Method 1: Using t-distribution (σ unknown)
Given:
- Sample size (n) = 7
- Sample mean (x̄) = 29.86
- Sample standard deviation (s) = 7.08
- t-critical value (t₀.₀₂₅,₆) = 2.447
- Confidence level = 95%

The confidence interval is calculated as:
x̄ ± (t₀.₀₂₅,₆)(s/√n)
29.86 ± (2.447)(7.08/√7)
29.86 ± 6.55

Therefore, the 95% confidence interval is (23.31, 36.41) years.

### Method 2: Using z-distribution (σ known)
Given:
- Population standard deviation (σ) = 7.08
- z-critical value = 1.96
- Other parameters same as above

The confidence interval is calculated as:
x̄ ± (z₀.₀₂₅)(σ/√n)
29.86 ± (1.96)(7.08/√7)
29.86 ± 5.24

Therefore, the 95% confidence interval is (24.62, 35.10) years.

## Hypothesis Testing

To test whether the mean age differs from 21 years, we follow the six-step hypothesis testing procedure:

### Step 1: State Hypotheses
H₀: μ = 21 (null hypothesis)
H₁: μ ≠ 21 (alternative hypothesis)

### Step 2: Specify Significance Level
α = 0.05 (two-tailed test)
Critical values: t₀.₀₂₅,₆ = ±2.447

### Step 3: Calculate Test Statistic
t = (x̄ - μ₀)/(s/√n)
t = (29.86 - 21)/(7.08/√7)
t = 3.31

### Step 4: Find p-value
Using the t-distribution with 6 degrees of freedom:
p-value = 0.0162

### Step 5: Make a Decision
Since p-value (0.0162) < α (0.05), we reject H₀

### Step 6: State Conclusion
There is enough evidence to conclude that the average age of Beach Comber patrons at 7 PM is different from 21 years (p = 0.0162). The data indicates that the true mean age is likely higher than 21, as evidenced by both the positive test statistic of 3.31 and the confidence interval of (23.31, 36.41), which lies entirely above 21.

## Comparison of Methods

The analysis demonstrates important statistical concepts:

1. The t-distribution interval is wider than the z-distribution interval, reflecting the additional uncertainty when estimating the population standard deviation.

2. Both confidence intervals tell the same story: we can be 95% confident that the true mean age falls within these ranges.

3. The hypothesis test results align with the confidence interval approach - both indicate strong evidence against the null hypothesis of μ = 21.

4. The scope of inference is limited to the Beach Comber at 7pm, as the sampling was conducted only at this specific time.

This example illustrates the relationship between confidence intervals and hypothesis testing, showing how they provide complementary information about population parameters.