import time


def make_requests(urls):
    time.sleep(1)
    responses = []
    for url in urls:
        try:
            response = requests.get(url, timeout=3)
        except ReadTimeOut:
            continue

        try:
            response.raise_for_status()
        except HTTPError:
            continue

        responses.append(response)
    return responses
