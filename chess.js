var i, j;
document.write("<table border=2>");

for (i = 1; i <= 8; i++) {
  document.write("<tr>");

  if (i % 2 == 0) {
    for (j = 1; j <= 8; j++) {
      if (j % 2 != 0) {
        document.write("<td style='background-color:white'></td>");
      } else {
        document.write("<td style='background-color:black'></td>");
      }
    }
  } else {
    for (j = 1; j <= 8; j++) {
      if (j % 2 != 0) {
        document.write("<td style='background-color:black'></td>");
      } else {
        document.write("<td style='background-color:white'></td>");
      }
    }
  }
  document.write("</tr>");
}
document.write("</table>");