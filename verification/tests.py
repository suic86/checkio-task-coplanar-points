"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""

TESTS = {
    "Basics": [
        {
            "input": [
                [9, 7],
                [2, 5],
                [5, 3],
                [2, 5]
            ],
            "answer": True,
            "explanation": [0, 6.33]
        },
        {
            "input": [
                [0, 0],
                [0, 2],
                [5, 1],
                [3, 1]
            ],
            "answer": True,
            "explanation": [0, 1]
        },

        {
            "input": [
                [0, 0],
                [0, 2],
                [3, 1],
                [5, 1]
            ],
            "answer": False,
            "explanation": [10, 1]
        },
        {
            "input": [
                [0, 0],
                [2, 2],
                [6, 0],
                [3, 1]
            ],
            "answer": True,
            "explanation": [0, 2]
        },
        {
            "input": [
                [6, 0],
                [5, 5],
                [4, 0],
                [5, 6]
            ],
            "answer": False,
            "explanation": [5.66, 10]
        },
        {
            "input": [
                [0, 0],
                [1, 1],
                [3, 3],
                [2, 2]
            ],
            "answer": True,
            "explanation": [0, 0]
        },
        {
            "input": [
                [0, 0],
                [1, 1],
                [3, 2],
                [2, 1]
            ],
            "answer": False,
            "explanation": [1, 0]
        },
        {
            "input": [
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3]
            ],
            "answer": False,
            "explanation": [10, 10]
        },
        {
            "input": [
                [0, 0],
                [1, 1],
                [3, 3],
                [2, 2]
            ],
            "answer": True,
            "explanation": [0, 0]
        },
        {
            "input": [
                [10, 2],
                [1, 6],
                [7, 5],
                [10, 7]
            ],
            "answer": False,
            "explanation": [10, 7]
        },
        {
            "input": [
                [2, 2],
                [0, 0],
                [3, 1],
                [6, 0]
            ],
            "answer": False,
            "explanation": [6, 0]
        },
        {
            "input": [
                [0, 1],
                [1, 2],
                [2, 0],
                [0, 2]
            ],
            "answer": True,
            "explanation": [0, 2]
        },
        {
            "input": [
                [1, 2],
                [6, 10],
                [1, 4],
                [8, 4]
            ],
            "answer": True,
            "explanation": [10, 4]
        },
        {
            "input": [
                [10, 4],
                [3, 7],
                [5, 5],
                [1, 7]
            ],
            "answer": False,
            "explanation": [0, 7.5]
        },
        {
            "input": [
                [3, 7],
                [10, 3],
                [2, 0],
                [10, 2]
            ],
            "answer": False,
            "explanation": [10, 2]
        },
        {
            "input": [
                [5, 4],
                [9, 9],
                [8, 4],
                [0, 6]
            ],
            "answer": True,
            "explanation": [0, 6]
        },
        {
            "input": [
                [7, 0],
                [10, 5],
                [7, 7],
                [0, 4]
            ],
            "answer": False,
            "explanation": [0, 4]
        },
        {
            "input": [
                [6, 3],
                [7, 3],
                [5, 8],
                [3, 3]
            ],
            "answer": False,
            "explanation": [1.8, 0]
        },
        {
            "input": [
                [1, 4],
                [6, 7],
                [7, 9],
                [0, 5]
            ],
            "answer": False,
            "explanation": [0, 5]
        },
        {
            "input": [
                [4, 9],
                [5, 9],
                [7, 4],
                [2, 6]
            ],
            "answer": False,
            "explanation": [0, 6.8]
        },
        {
            "input": [
                [8, 9],
                [0, 4],
                [5, 8],
                [0, 9]
            ],
            "answer": False,
            "explanation": [0, 9]
        },
        {
            "input": [
                [3, 8],
                [2, 4],
                [10, 3],
                [4, 6]
            ],
            "answer": True,
            "explanation": [0, 8]
        },
        {
            "input": [
                [5, 0],
                [3, 1],
                [7, 3],
                [9, 10]
            ],
            "answer": False,
            "explanation": [9, 10]
        },
        {
            "input": [
                [5, 1],
                [0, 9],
                [0, 7],
                [0, 2]
            ],
            "answer": False,
            "explanation": [0, 2]
        },
        {
            "input": [
                [1, 6],
                [1, 3],
                [6, 0],
                [0, 9]
            ],
            "answer": False,
            "explanation": [0, 9]
        }

    ],
    "Extra": [
        {
            "input": [
                [5, 6],
                [3, 3],
                [10, 10],
                [7, 3]
            ],
            "answer": False,
            "explanation": [5.71, 0]
        },
        {
            "input": [
                [8, 1],
                [9, 7],
                [6, 6],
                [6, 3]
            ],
            "answer": False,
            "explanation": [6, 0]
        },
        {
            "input": [
                [3, 3],
                [3, 9],
                [8, 10],
                [2, 1]
            ],
            "answer": False,
            "explanation": [1.33, 0]
        },
        {
            "input": [
                [3, 7],
                [9, 3],
                [7, 7],
                [6, 6]
            ],
            "answer": True,
            "explanation": [0, 0]
        },
        {
            "input": [
                [5, 8],
                [3, 1],
                [9, 1],
                [10, 6]
            ],
            "answer": False,
            "explanation": [10, 6]
        },
        {
            "input": [
                [10, 2],
                [6, 6],
                [6, 1],
                [5, 3]
            ],
            "answer": False,
            "explanation": [1.5, 10]
        },
        {
            "input": [
                [2, 4],
                [4, 9],
                [1, 7],
                [5, 6]
            ],
            "answer": True,
            "explanation": [10, 4.75]
        },
        {
            "input": [
                [8, 8],
                [6, 9],
                [9, 2],
                [7, 7]
            ],
            "answer": True,
            "explanation": [5.8, 10]
        },
        {
            "input": [
                [5, 7],
                [5, 9],
                [3, 10],
                [5, 7]
            ],
            "answer": True,
            "explanation": [9.66, 0]
        },
        {
            "input": [
                [2, 5],
                [6, 3],
                [3, 5],
                [2, 2]
            ],
            "answer": True,
            "explanation": [1.33, 0]
        },
        {
            "input": [
                [0, 7],
                [6, 3],
                [10, 6],
                [5, 0]
            ],
            "answer": False,
            "explanation": [5, 0]
        },
        {
            "input": [
                [2, 0],
                [2, 8],
                [7, 5],
                [8, 1]
            ],
            "answer": False,
            "explanation": [8.25, 0]
        },
        {
            "input": [
                [9, 4],
                [7, 9],
                [7, 0],
                [5, 0]
            ],
            "answer": False,
            "explanation": [5, 0]
        },
        {
            "input": [
                [1, 8],
                [0, 0],
                [10, 0],
                [7, 6]
            ],
            "answer": False,
            "explanation": [5, 10]
        },
        {
            "input": [
                [9, 1],
                [9, 2],
                [7, 1],
                [6, 2]
            ],
            "answer": False,
            "explanation": [0, 8]
        },
        {
            "input": [
                [8, 1],
                [10, 7],
                [0, 1],
                [3, 1]
            ],
            "answer": True,
            "explanation": [10, 1]
        },
        {
            "input": [
                [7, 7],
                [9, 9],
                [8, 6],
                [0, 4]
            ],
            "answer": False,
            "explanation": [0, 4]
        },
        {
            "input": [
                [0, 4],
                [9, 3],
                [9, 7],
                [7, 1]
            ],
            "answer": True,
            "explanation": [6.66, 0]
        }
    ]
}
