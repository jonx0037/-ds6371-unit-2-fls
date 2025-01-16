# Central Limit Theorem Simulation Results and Analysis

## Initial Simulation (n = 5)
Using 500 random samples of size 5, we observe the following characteristics:

The mean of the 500 sample means centers around the population mean of the word lengths. This demonstrates the unbiased nature of sample means as an estimator of the population mean. The standard deviation of these 500 sample means is notably smaller than the population standard deviation, showing the reduced variability in sampling distributions compared to the original population.

The distribution of the 500 sample means begins to show a roughly normal shape, with some remaining skewness and variability due to the small sample size. This illustrates the early stages of the Central Limit Theorem taking effect.

## Comparative Analysis Across Sample Sizes

### Sample Size = 10
The sampling distribution shows improved normality compared to n=5. The standard deviation of sample means decreases as expected, following the relationship σ/√n. The center remains stable around the population mean, demonstrating the consistency of the estimator.

### Sample Size = 20
With this larger sample size, we observe:
- Further reduction in the spread of sample means
- More pronounced normality in the distribution
- Maintained centering around the population mean
- Standard error closely matching the theoretical σ/√20

### Sample Size = 50
At this sample size, the Central Limit Theorem's effects are strongly evident:
- Nearly perfect normal distribution shape
- Minimal variance in sample means
- Precise alignment with theoretical standard error (σ/√50)
- Highly stable center at the population mean

## Pattern Analysis
The consistent patterns observed across increasing sample sizes demonstrate fundamental statistical principles:

1. The sampling distribution becomes increasingly normal regardless of the underlying population distribution (CLT in action)
2. The spread of sample means decreases predictably with √n
3. The center remains stable at the population mean
4. The relationship between sample size and standard error follows theoretical expectations precisely

## Additional Population Types
Testing with "Pennies" and "Change" populations reveals similar patterns, confirming that the CLT applies regardless of the underlying population distribution. The convergence to normality occurs at similar rates, though the specific sample size needed for good approximation may vary based on the initial distribution's characteristics.

## Alternative Statistics
When examining the median and standard deviation:
- The sampling distribution of medians also tends toward normality, though typically requiring larger sample sizes than means
- The sampling distribution of standard deviations shows right skewness and follows a chi-square-related distribution rather than normal
- These differences highlight the special theoretical properties of means compared to other sample statistics

## Conclusions
This simulation effectively demonstrates key principles of sampling theory:
1. The universality of the Central Limit Theorem
2. The relationship between sample size and sampling distribution characteristics
3. The special role of means in statistical theory
4. The practical implications of sample size selection in statistical studies

These findings have important implications for statistical inference and study design, particularly in determining appropriate sample sizes for various statistical procedures.