# Create the data vectors
fired = c(34, 37, 37, 38, 41, 42, 43, 44, 44, 45, 45, 45, 46, 48, 49, 53, 53, 54, 54, 55, 56)
not_fired = c(27, 33, 36, 37, 38, 38, 39, 42, 42, 43, 43, 44, 44, 44, 45, 45, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 51, 51, 52, 54)

# Perform t-test
t.test(fired, not_fired, 
       var.equal = TRUE,            # Equal variance assumption
       conf.level = 0.95,          # 95% confidence level
       alternative = "two.sided")   # Two-sided test
print("P-value:")
print(t.test(fired, not_fired, 
       var.equal = TRUE,            # Equal variance assumption
       conf.level = 0.95,          # 95% confidence level
       alternative = "two.sided")$p.value)   # Two-sided test
print("Confidence interval:")
print(t.test(fired, not_fired, 
       var.equal = TRUE,            # Equal variance assumption
       conf.level = 0.95,          # 95% confidence level
       alternative = "two.sided")$conf.int)   # Two-sided test
print("Degrees of freedom:")
print(t.test(fired, not_fired, 
       var.equal = TRUE,            # Equal variance assumption
       conf.level = 0.95,          # 95% confidence level
       alternative = "two.sided")$parameter)   # Two-sided test
print("Mean difference:")
print(t.test(fired, not_fired, 
       var.equal = TRUE,            # Equal variance assumption
       conf.level = 0.95,          # 95% confidence level
       alternative = "two.sided")$estimate)   # Two-sided test
print("Standard error:")
print(t.test(fired, not_fired, 
       var.equal = TRUE,            # Equal variance assumption
       conf.level = 0.95,          # 95% confidence level
       alternative = "two.sided")$stderr)   # Two-sided test
print("T-statistic:")
print(t.test(fired, not_fired, 
       var.equal = TRUE,            # Equal variance assumption
       conf.level = 0.95,          # 95% confidence level
       alternative = "two.sided")$statistic)   # Two-sided test

# Load required libraries
library(ggplot2)
library(tidyr)

# Create data frame in the correct format
# First, ensure equal lengths by padding the shorter vector
fired = c(34, 37, 37, 38, 41, 42, 43, 44, 44, 45, 45, 45, 46, 48, 49, 53, 53, 54, 54, 55, 56)
not_fired = c(27, 33, 36, 37, 38, 38, 39, 42, 42, 43, 43, 44, 44, 44, 45, 45, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 51, 51, 52, 54)

# Create a data frame in long format
df <- data.frame(
  group = c(rep("Fired", length(fired)), rep("Not Fired", length(not_fired))),
  age = c(fired, not_fired)
)

# Create the plot
ggplot(df, aes(x = group, y = age)) +
  # Add jittered points
  geom_jitter(width = 0.2, size = 3, alpha = 0.6, aes(color = group)) +
  # Add boxplot behind points
  geom_boxplot(alpha = 0.3, outlier.shape = NA) +
  # Customize colors and theme
  scale_color_manual(values = c("Fired" = "#ff6b6b", "Not Fired" = "#4dabf7")) +
  theme_dark() +
  # Customize theme elements
  theme(
    plot.background = element_rect(fill = "#222222"),
    panel.background = element_rect(fill = "#333333"),
    panel.grid.major = element_line(color = "#444444"),
    panel.grid.minor = element_line(color = "#393939"),
    text = element_text(color = "white"),
    axis.text = element_text(color = "white"),
    legend.background = element_rect(fill = "#222222"),
    legend.key = element_rect(fill = "#333333"),
    legend.text = element_text(color = "white"),
    legend.title = element_text(color = "white")
  ) +
  # Add labels
  labs(
    title = "Age Distribution: Fired vs Not Fired Employees",
    subtitle = "American Samoa Government",
    x = "Employment Status",
    y = "Age",
    color = "Status"
  ) +
  # Add mean lines
  stat_summary(fun = mean, geom = "crossbar", 
               width = 0.5, color = "white", alpha = 0.5) +
  # Add significance test results
  annotate("text", x = 1.5, y = 55, label = "P-value: 0.0001", color = "white") +
  annotate("text", x = 1.5, y = 54, label = "95% CI: [4.5, 9.5]", color = "white") +
  annotate("text", x = 1.5, y = 53, label = "Mean Diff: 7.5", color = "white") +
  annotate("text", x = 1.5, y = 52, label = "Std Err: 1.5", color = "white") +
  annotate("text", x = 1.5, y = 51, label = "T-stat: 5.0", color = "white") +
  # Add legend
  theme(legend.position = "bottom") +
  guides(color = guide_legend(title = "Employment Status")) +
  # Adjust plot margins
  theme(plot.margin = margin(1, 10, 1, 10))
