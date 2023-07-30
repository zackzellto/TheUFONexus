from django.http import JsonResponse
from django.views.decorators.http import require_GET
import requests
import os


@require_GET
def news(request):
    response = requests.get(
        'https://newsdata.io/api/1/news',
        headers={
            'Authorization': f'Bearer {os.getenv("NEWSDATA_API_KEY")}',
        },
        params={
            'q': 'UFOs whistleblowers congress AARO',
        }
    )

    if response.status_code == 200:
        return JsonResponse(response.json(), safe=False)
    else:
        return JsonResponse({'error': 'Could not fetch news'}, status=response.status_code)
