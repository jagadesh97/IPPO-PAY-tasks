function minimumDifference(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    const n = nums.length / 2;
    const dp = new Array(n + 1).fill(false).map(() => new Array(totalSum + 1).fill(false));
    dp[0][0] = true;
  
    for (const num of nums) {
      for (let i = n; i >= 1; i--) {
        for (let j = totalSum; j >= num; j--) {
          dp[i][j] = dp[i][j] || dp[i - 1][j - num];
        }
      }
    }
  
    for (let j = Math.floor(totalSum / 2); j >= 0; j--) {
      if (dp[n][j]) {
        return totalSum - 2 * j;
      }
    }
  }
  