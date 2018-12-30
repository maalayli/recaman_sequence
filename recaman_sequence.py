'''the recaman sequence
'''
current_location = 0
current_addition = 1
previous_nums = [0]
reps = 1000


def main():
    for rep in range(reps):  # goes through the amount of reps and runs the function
        recaman_sequence()
    print(previous_nums)


def recaman_sequence():
    '''checks if the subtraction is viable,
    if not the it does an addition and appends the number into the array'''
    global current_addition
    global current_location

    next_number = current_location-current_addition

    if((next_number in previous_nums) or next_number <= 0):
        current_location += current_addition
    else:
        current_location = next_number

    previous_nums.append(current_location)

    current_addition += 1


if __name__ == "__main__":
    main()
