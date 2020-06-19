library(ggplot2)

asyncResults <- read.csv("./async-results.csv")
names(asyncResults) <- c("time")
syncResults <- read.csv("./sync-results.csv")
names(syncResults) <- c("time")

results <- data.frame(time=numeric(), type=character())

for (time in asyncResults$time) {
  results <- rbind(results, list(time=c(as.numeric(time)), type=c("async")))
}
for (time in syncResults$time) {
  results <- rbind(results, list(time=c(as.numeric(time)), type=c("sync")))
}

chart <- ggplot(results[results$type == "async",], aes(x=time, color=type)) +
  scale_x_log10() +
  geom_density()

print(chart)
ggsave("results.png")
