let challenges = [
    {
        name: 'Find the sum of the lowest and highest number in an array',
        desc: 'Iterate through the array to find the lowest and highest number and return the sum of the two numbers.',
        testCases: [
            {
                input: [1, 2, 3, 4, 5],
                expectedOutput: 6
            },
            {
                input: [5, 4, 3, 2, 1],
                expectedOutput: 6
            },
            {
                input: [25, 10, 62, 29, 2, 85],
                expectedOutput: 87
            },
            {
                input: [-4, 5, 10, 96, 2],
                expectedOutput: 92
            },
            {
                input: [20, 30, 10],
                expectedOutput: 40
            }
        ]

    },
    {
        name: 'Find the product of the lowest and highest number in an array',
        desc: 'Iterate through the array to find the lowest and highest number and return the product of the two numbers.',
        testCases: [
            {
                input: [1, 2, 3, 4, 5],
                expectedOutput: 5
            },
            {
                input: [5, 4, 3, 2, 1],
                expectedOutput: 5
            },
            {
                input: [25, 10, 62, 29, 2, 85],
                expectedOutput: 170
            },
            {
                input: [-4, 5, 10, 96, 2],
                expectedOutput: -384
            },
            {
                input: [20, 30, 10],
                expectedOutput: 300
            }
        ]
    }
]

export default challenges;