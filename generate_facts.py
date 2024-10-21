facts = {}
with open("facts.txt", "r") as f:
    for line in f:
        key, value = line.strip().split(" ", 1)
        facts[key] = value

with open("facts.js", "w") as f:
    f.write("function getFact(key) {\n")
    for key, value in facts.items():
        f.write(f'  if (key == {key}) return "{value}";\n')
    f.write("  return '---';\n")
    f.write("}\n")
