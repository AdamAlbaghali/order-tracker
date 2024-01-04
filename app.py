# from faker import Faker

# fake = Faker()

# def generate_fixed_scenarios():
#     scenarios = [
#         "Design team working on proofs",
#         "Garments ordered from wholesaler",
#         "Job being printed",
#         "Order shipped"
#     ]

#     generated_statements = []

#     for _ in range(100):
#         random_scenario = scenarios[_ % len(scenarios)]
#         generated_statements.append(random_scenario)

#     return generated_statements


# generated_100_scenarios = generate_fixed_scenarios()
# for statement in generated_100_scenarios:
#     print(statement)





# fake = Faker()

# order_numbers = [f"{fake.unique.random_number(digits=4):04d}" for _ in range(100)]
# gmails = [f"{fake.user_name()}_{order_number}@gmail.com" for order_number in order_numbers]

# for order_number, gmail in zip(order_numbers, gmails):
#     print(f"Order Number: {order_number}\t Gmail: {gmail}")
    

#changes to make: see how many digits are normally in order numbers 
# its 4


