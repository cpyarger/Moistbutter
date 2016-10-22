<!DOCTYPE html>
<html lang="en">
<head>
    <% include ../partials/head %>
</head>
<body class="container">

    <header>
        <% include ../partials/header %>
    </header>

    <main>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h1 class="text-center">User Access Levels</h1>
            <hr />
          <table class="text-center table table-striped">
            <thead><b>
              <tr>
                <td><b>Group ID</b></td>
                <td><b>Group Name</b></td>
              </tr>
            </thead>
            <tbody>
              <% groups.forEach(function(item, index){ %>
                <tr>
                  <td><%= item.idUserLevels %></td>
                  <td><%= item.LevelName %>
                </tr>
              <% }); %>

          </tbody>
        </table>
      </div>
    </main>

    <script>$(".<%=classi%>").removeClass("<%=classi%>").addClass("active")</script>

    <footer>
        <% include ../partials/footer %>
    </footer>

</body>
</html>