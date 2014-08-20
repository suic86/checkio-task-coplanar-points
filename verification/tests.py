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
            "input": ((2, 2), (5, 7), (11, 2), (8, 3)),
            "answer": 100,
            "explanation": [3.5, 4.5]
        },
        {
            "input": ((2, 2), (5, 7), (11, 2), (7, 2)),
            "answer": 0,
            "explanation": [2.0, 2.0]
        },
        {
            "input": ((2, 2), (5, 7), (11, 2), (8, 4)),
            "answer": 29,
            "explanation": [4.571428571428571, 6.285714285714286]
        },
        {
            "input": ((2, 2), (5, 7), (11, 2), (9, 5)),
            "answer": -1,
            "explanation": [6.2631578947368425, 9.105263157894736]
        },
        {
            "input": ((2, 2), (5, 7), (11, 2), (10.5, 3)),
            "answer": -1,
            "explanation": [6.909090909090909, 10.181818181818182]
        },
    ]
}
