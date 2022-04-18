"use strict";
import common from '../../utils/common.js';

export default function ampliadorTexto(self, destroy) {
  var div_toltip = document.createElement("div");
  div_toltip.id = "tool-tip";
  div_toltip.className = "tool-tip";
  div_toltip.style.width = "500px";
  div_toltip.style.height = "auto";
  div_toltip.style.display = "none";

  //var word="";

  $(function () {
    var $hoverText = $(".hasText");

    if (destroy) {
      var tool = document.querySelectorAll(".tool-tip");
      tool.forEach((el) => {
        el.removeClass();
      });
      
      return;
    }

    

    if (!self.initialValues.ampliadorTexto) {
      document
        .querySelector(
          '._access-menu-func[data-access-action="ampliadorTexto"]'
        )
        .classList.remove("active");
      self.initialValues.ampliadorTexto = false;
      self.sessionState.ampliadorTexto = false;
      self.onChange(true);
      var tool = document.querySelectorAll(".tool-tip");
      tool.forEach((el) => {
        $(el).removeClass("tool-tip");
      });
      //$hoverText.removeEventListener()
      $hoverText.off("mousemove");
      for (const text of $hoverText) {
        text.removeEventListener("mousemove", _mouseMove);
        text.classList.remove("hasText");
        text.removeAttribute("title-new");
        //console.log(text);
      }
      var removeTol = document.getElementById("tool-tip");
      removeTol.remove();
      return;
    } else {
      console.log("####Activado#####");
      $('<div id="tool-tip" class="tool-tip"></div>').appendTo("body");
      $("div.tool-tip").css({
        display: "block",
        border: "1px solid #ccc",
        position: "absolute",
        "max-width": "auto",
        "background-color": "#262626",
        border: "2px solid #ccc",
        "font-family": "Arial",
        "font-size": "28px",
        color: "#fff",
        "border-radius": "7.5px",
        "max-height": "auto",
        "z-index": "1000003",
        overflow: "auto",
        padding: "10px 15px",
        transition: "bottom 1s linear 0s",
      });
      $(".tool-tip").hide();
      for (const list of $hoverText) {
        list.addEventListener("mousemove", _mouseMove, false);
      }
      self.onChange(true);

      //common.injectStyle(css);
    }
    function _mouseMove(e) {
      if (!self.initialValues.ampliadorTexto) {
        e.stopPropagation();
        //window.removeEventListener('mousemove',addEventListener);
        //console.log(e.target);
      } else {
        if (e.target.className !== "hasText") {
          $("#tool-tip").hide();
        } else {
          var word = getWordUnderCursor(e);
        }

        if (word != "") {
          mouseEventTol(e, word);
        } else {
          $("#tool-tip").fadeOut("slow");
          $("#tool-tip").hide();
          console.log("sem texto");
        }
      }
    }
    function mouseEventTol(event, word) {
      $(function () {
        $("#tool-tip").fadeIn("slow");
        $("#tool-tip").css({
          top: event.pageY - 25 + "px",
          left: event.pageX,
        });
        $(".tool-tip").text(word);
      });
    }

    function getWordUnderCursor(event) {
      var range, textNode, offset;

      if (document.body.createTextRange) {
        // Internet Explorer
        try {
          range = document.body.createTextRange();
          range.moveToPoint(event.clientX, event.clientY);
          range.select();
          range = getTextRangeBoundaryPosition(range, true);

          textNode = range.node;
          offset = range.offset;
        } catch (e) {
          return "";
        }
      } else if (document.caretPositionFromPoint) {
        // Firefox
        range = document.caretPositionFromPoint(event.clientX, event.clientY);
        textNode = range.offsetNode;
        offset = range.offset;
      } else if (document.caretRangeFromPoint) {
        // Chrome
        range = document.caretRangeFromPoint(event.clientX, event.clientY);
        textNode = range.startContainer;
        offset = range.startOffset;
      } else {
        alert("Browser nao suportado");
      }

      //data contem a frase completa
      //offset representa a posiçao do cursor
      var data = textNode.data,
        i = offset,
        begin,
        end;

      //Fdeterminar o inicio da frase
      //console.log(data);
      try {
        while (i > 0 && data[i] !== " " && data[i] !== ".") {
          --i;
        }
        begin = i;

        //determinar o fim da frase
        i = offset;
        while (i < data.length && data[i] !== "," && data[i] !== ".") {
          ++i;
        }
        end = i;

        return data.substring(begin, end);
      } catch (error) {
        console.log("campo sem texto");
      }
    }

    // Para Internet explorer
    //
    function getTextRangeBoundaryPosition(textRange, isStart) {
      var workingRange = textRange.duplicate();
      workingRange.collapse(isStart);
      var containerElement = workingRange.parentElement();
      var workingNode = document.createElement("span");
      var comparison,
        workingComparisonType = isStart ? "StartToStart" : "StartToEnd";

      var boundaryPosition, boundaryNode;

      do {
        containerElement.insertBefore(workingNode, workingNode.previousSibling);
        workingRange.moveToElementText(workingNode);
      } while ((comparison = workingRange.compareEndPoints(workingComparisonType, textRange)) > 0 && workingNode.previousSibling);

      boundaryNode = workingNode.nextSibling;
      if (comparison == -1 && boundaryNode) {
        workingRange.setEndPoint(
          isStart ? "EndToStart" : "EndToEnd",
          textRange
        );

        boundaryPosition = {
          node: boundaryNode,
          offset: workingRange.text.length,
        };
      } else {
        boundaryPosition = {
          node: containerElement,
          offset: getChildIndex(workingNode),
        };
      }

      // Clean up
      workingNode.parentNode.removeChild(workingNode);

      return boundaryPosition;
    }
  });
}
