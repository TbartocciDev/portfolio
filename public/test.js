const logs = [
    "99 1 log-in",
    "101 2 log-in",
    "300 4 log-out",
    "400 1337 log-in",
    "305 4 log-in",
    "310 4 log-out",
    "200 1 log-out",
    "150 10 log-in",
    "415 1337 log-out"
]

var lessThan20Dict = { }
var loggedInUserDict = { }

logs.forEach((log) => {
    const timeThreshold = 20
    const logInfo = log.split(' ')
    if (logInfo.length === 3) {
        const time = logInfo[0]
        const userId = logInfo[1]
        const action = logInfo[2]

        const existing = loggedInUserDict[userId] 
        if (existing) {
            if (action === 'log-out') {
                // check time diff here 
                const timeDiff = Math.abs(existing.time - time)
                // 20 can be injected from function
                if (timeDiff < timeThreshold) {
                    lessThan20Dict[userId] = {
                        userId
                    }
                }
            }
        } else {
            if (action === 'log-in') {
                loggedInUserDict[userId] = {
                    userId,
                    time
                }
                lessThan20Dict[userId] = undefined
            }
        }
    }
})

console.log(`loggedInUsers = ${JSON.stringify(lessThan20Dict)}`)