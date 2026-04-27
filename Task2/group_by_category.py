def group_by_category(items: list[dict]) -> dict:
    """Groups item names by their category.

    Args:
        items: A list of dicts with 'name' and 'category' keys.

    Returns:
        A dict where keys are categories and values are lists of names.
    """
    result: dict[str, list[str]] = {}

    for item in items:
        category = item["category"]
        name = item["name"]

        if category not in result:
            result[category] = []

        result[category].append(name)

    return result