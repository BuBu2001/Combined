"""repo-describer: объединение doxygen (tree-sitter/док-комментарии)
и TiddlyWiki5 (.tid + headless-рендер) в генератор описаний репозиториев."""
from .generator import generate
__all__ = ["generate"]
