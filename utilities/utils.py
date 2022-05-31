from rest_framework.response import Response


def application_error(message="", error_code=""):
    return Response({"error": message, "status_code": error_code})
