<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSS de Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

    </head>
    <body>
<!-- BARRA DE NAVEGACION -->
        <nav class="navbar  bg-primary sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.php">
                    <img src="../img/casa-logo.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                    HouseRenta <!-- nombre de la pagina -->
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="view/CasaView.php">Vista de casas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="view/ReservacionView.php">Reservacion de casa</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="alert alert-success" role="alert">
                <h1>Reservación creada</h1> 
            </div>
            <p>FOLIO: <?php echo $nuevareservacion['idreservacion']; ?> </p>
            <p>ANFITRIÓN: <?php echo $nuevareservacion['f_nombre']; ?> </p>
            <p>DIRECCIÓN DE LA CASA: <?php echo $nuevareservacion['c_direccion']; ?> </p>
            <p>HUESPED: <?php echo $nuevareservacion['p_nombre']; ?> </p>
            <p>FECHA DE ENTRADA: <?php echo $nuevareservacion['ingreso']; ?> </p>
            <p>FECHA DE SALIDA: <?php echo $nuevareservacion['salida']; ?> </p>
            <p>COSTO: <?php echo $nuevareservacion['costo']; ?> </p>

            <a class="btn btn-primary" href="../index.php" role="button">Regresar al inicio</a>
            
        </div>


        <script src="../js/jquery-3.4.1.min.js"></script>

        <script src="../js/bootstrap.min.js"></script>


    </body>
</html>
