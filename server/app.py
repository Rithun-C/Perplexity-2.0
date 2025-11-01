from typing import TypedDict, Optional, Annotated
from langgraph.graph import add_messages, StateGraph, END
from langchain_groq import ChatGroq
from dotenv import load_dotenv
from  langchain_community.tools.tavily_search import TavilySearchResults
from langgraph.checkpoint.memory import MemorySaver
from uuid import uuid4
import json

load_dotenv()

llm = ChatGroq(model='llama-3.1-8b-instant')
search_tool = TavilySearchResults(max_results=4)
tools = [search_tool]
llm_with_tools = llm.bind_tools(tools=tools)