/*global
 debug, dbgConsole
*/

// The purpose of this file is to allow custom functions to be added to Merger, by anyone using Merger
//
import {xDbgConsole} from "merger"
import {xExtFunctions} from "../../merger/built/esm/src/merger-extensions.js"

export const customFunctions = {

   handleLastLeafNode: function(leafNodeHtml) {
      "use strict";
      // remove <description> opening tag and make basic <li> content for last leaf node
      // this is a specific function requires by the Taxonomy ex2 that ships with Merger

      const leafName = leafNodeHtml.getElementsByTagName("summary");
      leafNodeHtml.innerHTML = (leafName[0].innerHTML);
      return leafNodeHtml;
   },

   priceFormat: function(srcValue) {
      "use strict";
      //in real use this would need a switch case based on context currency
      return "$" + srcValue;
   },

   doFunction: function(functionSel, srcValue, oldContent) {
      "use strict";
      //do function requested by function selector string
      //returns  new content based on oldContent html (when supplied) and srcValue (when supplied)

      switch (functionSel) {
      case "priceFormat":
         // basic example of custom function to return src value price display formatted
         return this.priceFormat(srcValue);
   
      case "lastLeafNode":
         // basic example of custom function. Used by merger example 2) Google Taxonomy. Transforms html to handle last tree node, giving it no html open selection
         return this.handleLastLeafNode(oldContent);

      default:
         if (debug) {
            dbgConsole.warn("No custom function found either, for selector:"
               + functionSel + ", srcValue:" + srcValue + ", oldContent:" + oldContent);
         }
      }
   }
}
