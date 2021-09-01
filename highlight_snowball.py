from pygments import highlight
from pygments.lexers import SnowballLexer
from pygments.formatters import HtmlFormatter
import sys

print(highlight(sys.stdin.read(), SnowballLexer(), HtmlFormatter()))
