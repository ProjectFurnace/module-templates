from furnace import processEvent
import asyncio
import unittest
from unittest import mock

def _run(coro):
    return asyncio.get_event_loop().run_until_complete(coro)

class TestProcessEvent(unittest.TestCase):
    def test_example(self):
        output = _run(processEvent('data'))
        self.assertEqual('example', 'example')

