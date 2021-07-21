def get_dependencies(file_path):

    dependencies = []
    with open(file_path, "r") as file:
        for line in file:
            if line.startswith("import"):
                dependencies.append(line.split(" ")[1].strip())
    return dependencies


def get_dependecies_urls(pacotes):
    return [f"https://pypi.org/project/{pacote}/" for pacote in pacotes]


assert get_dependencies() == []
