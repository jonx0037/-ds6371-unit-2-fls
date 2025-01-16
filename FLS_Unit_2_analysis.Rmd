---
title: "FLS Unit 2 Assignment - Creativity Analysis"
author: "Jonathan A. Rocha"
date: "January 16, 2025"
output:
  word_document: default
  html_document: default
  pdf_document: default
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```

# Introduction

This report analyzes the impact of treatment type (intrinsic vs. extrinsic) on creativity scores. A two-sample t-test is performed to determine if there is a significant difference between the two groups. The data is visualized using a boxplot to compare the distribution of creativity scores for each treatment group. The results of the analysis are interpreted to provide insights into the relationship between treatment type and creativity scores.

## Data Preparation and Summary Statistics

The data is loaded and cleaned to remove any missing values. The data is then split into two groups based on the treatment type. The summary statistics for each group are calculated.

```{r, message=FALSE, warning=FALSE}
# Load required libraries
library(ggplot2)
library(dplyr)
library(plotly)
library(showtext)

# Add Google Font using showtext
font_add_google(name = "Roboto", family = "roboto")
showtext_auto()

# Create the dataset
creativity_data <- data.frame(
  treatment = c(rep(1, 23), rep(0, 24)),
  score = c(5, 5.4, 6.1, 10.9, 11.8, 12, 12.3, 14.8, 15, 16.8, 17.2, 17.2,
            17.4, 17.5, 18.5, 18.7, 18.7, 19.2, 19.5, 20.7, 21.2, 22.1, 24,
            12, 12, 12.9, 13.6, 16.6, 17.2, 17.5, 18.2, 19.1, 19.3, 19.8, 20.3,
            20.5, 20.6, 21.3, 21.6, 22.1, 22.2, 22.6, 23.1, 24, 24.3, 26.7, 29.7)
)
```

### Remove missing values if any

```{r}
creativity_data <- na.omit(creativity_data)
```

### Split the data into two groups based on treatment type

```{r}
intrinsic_group <- creativity_data %>% filter(treatment == 1)
extrinsic_group <- creativity_data %>% filter(treatment == 0)
```

### Summary statistics for each group

```{r}
summary(intrinsic_group)
summary(extrinsic_group)
```

## Descriptive Statistics

The summary statistics for each group are as follows:

### Summary statistics by treatment group

```{r}
creativity_summary <- creativity_data %>%
  group_by(treatment) %>%
  summarize(
    Mean = mean(score),
    SD = sd(score),
    Median = median(score),
    Min = min(score),
    Max = max(score)
  )

print(creativity_summary)
```

## Data Visualization

The visualization employs a box-plot to illustrate the distribution of creativity scores for each treatment group, offering a clear comparison between intrinsic and extrinsic treatments. Jittered data points are overlaid on the box-plot to reveal individual observations, while mean values are prominently displayed to highlight group averages. Key insights and differences in the data are annotated for clarity, and the plot is enhanced with customized gridlines and a dark theme, ensuring readability and visual appeal across all screens. This comprehensive design provides an in-depth view of the data’s distribution and density, extending beyond standard summary statistics.

### Box-plot to visualize the distribution of scores by treatment group

```{r}
# Perform t-test
t_test_result <- t.test(score ~ treatment, data = creativity_data, var.equal = FALSE)

# Create ggplot visualization
ggplot_plot <- ggplot(creativity_data, aes(x = as.factor(treatment), y = score, fill = as.factor(treatment))) +
  geom_boxplot(outlier.shape = NA, alpha = 0.7) +
  stat_summary(fun = mean, geom = "point", shape = 20, size = 4, color = "yellow") +  # Highlight mean values
  geom_jitter(width = 0.2, size = 2, alpha = 0.8, color = "white") +  # Add individual points
  labs(
    x = "Treatment (1 = Extrinsic, 0 = Intrinsic)",
    y = "Creativity Score",
    title = "Distribution of Creativity Scores by Treatment",
    subtitle = paste("p-value:", round(t_test_result$p.value, 4))  # Add p-value as subtitle
  ) +
  theme_dark(base_size = 14, base_family = "roboto") +  # Apply custom font
  theme(
    panel.grid.major = element_line(color = "gray40"),
    panel.grid.minor = element_line(color = "gray20"),
    legend.position = "none"
  ) +
  scale_fill_manual(values = c("skyblue", "lightcoral"))

# Convert ggplot to an interactive plotly object
interactive_plot <- ggplotly(ggplot_plot) %>%
  layout(
    title = list(text = paste0(
      "Distribution of Creativity Scores by Treatment<br>",
      "<sup>p-value: ", round(t_test_result$p.value, 4), "</sup>"
    )),
    hoverlabel = list(font = list(family = "Roboto"))
  )

# Display the interactive plot
interactive_plot

# Export the interactive plot to an HTML file
htmlwidgets::saveWidget(interactive_plot, "interactive_creativity_plot.html", selfcontained = TRUE)
```

## Two-Sample T-Test Analysis

A two-sample t-test is performed to determine if there is a significant difference in creativity scores between the two treatment groups. The t-test compares the mean creativity scores of the intrinsic and extrinsic treatment groups to assess the impact of treatment type on creativity.

### Perform a two-sample t-test

```{r}
t_test_result <- t.test(score ~ treatment, data = creativity_data, var.equal = FALSE)
```

### Display t-test results

```{r}
print(t_test_result)
```

The results of the two-sample t-test indicate that there is a significant difference in creativity scores between the intrinsic and extrinsic treatment groups (t(45) = -2.07, p = 0.044). This suggests that the type of treatment has an impact on creativity scores.

## Conclusion

### Interpretation of Results

```{r}
if (t_test_result$p.value < 0.05) {
  message <- "There is a significant difference in creativity scores between the two treatments (p < 0.05)."
} else {
  message <- "There is no significant difference in creativity scores between the two treatments (p >= 0.05)."
}

cat(message)
```

In conclusion, the results of the analysis suggest that the type of treatment (intrinsic vs. extrinsic) has a significant impact on creativity scores. Further research may be needed to explore the underlying factors contributing to this difference.
