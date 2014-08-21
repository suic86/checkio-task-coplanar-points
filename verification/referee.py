from checkio.signals import ON_CONNECT
from checkio import api
from checkio.referees.io import CheckiOReferee
from checkio.referees.cover_codes import unwrap_args

from tests import TESTS

api.add_listener(
    ON_CONNECT,
    CheckiOReferee(tests=TESTS,
                   function_name="shot",
                   cover_code={
                       "python-3": unwrap_args,
                       "python-27": unwrap_args,
                   }

                   ).on_ready)
