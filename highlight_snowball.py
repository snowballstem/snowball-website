from pygments import highlight
from pygments_snowball import SnowballLexer
from pygments.formatters import HtmlFormatter
import sys

print(highlight(sys.stdin.read(), SnowballLexer(), HtmlFormatter()))
