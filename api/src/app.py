from datetime import datetime
from datetime import timedelta
from typing import TypedDict

from fastapi import FastAPI, Form, status
from fastapi.responses import RedirectResponse

from services.database import JSONDatabase

app = FastAPI()


class Quote(TypedDict):
    name: str
    message: str
    time: str


database: JSONDatabase[list[Quote]] = JSONDatabase("data/database.json")


@app.on_event("startup")
def on_startup() -> None:
    """Initialize database when starting API server."""
    if "quotes" not in database:
        print("Adding quotes entry to database")
        database["quotes"] = []


@app.on_event("shutdown")
def on_shutdown() -> None:
    """Close database when stopping API server."""
    database.close()


@app.post("/quote")
def post_message(name: str = Form(), message: str = Form()) -> RedirectResponse:
    """
    Process a user submitting a new quote.
    You should not modify this function except for the return value.
    """
    now = datetime.now().replace(microsecond=0)

    quote = Quote(name=name, message=message, time=now.isoformat())
    database["quotes"].append(quote)

    # You may modify the return value as needed to support other functionality
    return RedirectResponse("/", status.HTTP_303_SEE_OTHER)


@app.get("/quote")
def get_message(time_cutoff: str) -> list[Quote]:
    # calculate offset depending on query parameter
    match (time_cutoff):
        case "all":
            # unsure if simply returning all dictionaries is good or if they should be Quote classes
            return database["quotes"]
        case "week":
            timeOffset = timedelta(weeks=1)
        case "month":
            timeOffset = timedelta(weeks=4)
        case "year":
            timeOffset = timedelta(days=365)

    now = datetime.now().replace(microsecond=0)
    date_cutoff = now - timeOffset
    date_cutoff = date_cutoff.isoformat()

    
    returned_quotes = []

    """
    linear search for quote after cutoff and break.

    Go in reverse order, from earliest to latest to reach cutoff date.
    This works only because the json is organized in chronological order.
    """
    for i in range(len(database["quotes"]) - 1, 0, -1):
        quote = database["quotes"][i]
        # .isoformat allows direct comparison of strings
        if quote["time"] > date_cutoff:
            # unsure if this is needed, bc at the end of the function, you return a dictionary whether it's a Quote class or not
            # return_quote = Quote(name=quote["name"], message=quote["message"], time=quote["time"])
            returned_quotes.append(quote)
        else:
            break
    
    # reverse quotes to keep consistency with database json chronological order
    returned_quotes.reverse()
    return returned_quotes

# TODO: remove this for production
# endpoint to save to database (testing only)
@app.get("/close")
def close():
    on_shutdown()
