balance = 10000

while True:
    print("  ATM  ")
    print("""      
    1)      Balance
    2)      Withdraw
    3)      Deposit
    4)      Quit
    """)
    try:
        Option = int(input("Enter Option: "))
    except ValueError as e:
        print("Error:", e)
        print("Enter 1, 2, 3, or 4 only")
        continue

    if Option == 1:
        print("Balance $", balance)
    elif Option == 2:
        print("Balance $", balance)
        Withdraw = float(input("Enter Withdraw amount $ "))
        if Withdraw > 0:
            forward_balance = balance - Withdraw
            print("Forward Balance $", forward_balance)
        elif Withdraw > balance:
            print("No funds in account")
        else:
            print("No withdrawal made")
    elif Option == 3:
        print("Balance $", balance)
        Deposit = float(input("Enter deposit amount $ "))
        if Deposit > 0:
            forward_balance = balance + Deposit
            print("Forward Balance $", forward_balance)
        else:
            print("No deposit made")
    elif Option == 4:
        exit()
    else:
        print("Invalid option. Please enter 1, 2, 3, or 4 only.")
