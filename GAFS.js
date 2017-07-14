$(document).ready(function() {
        
        var $grid;

    // importer les exercices depuis le JSON 
    
        $.getJSON("asset/exercices.json", function(data) {
            $.each(data, function(index, item) {        

    /* intitialisation des cartes et des class pour chacune puis de l'espace bootstrap */
                
              $("<div/>", {
                'class':'carte' + " " + item.Catégorie + " " + item.Armes + " "  + 'item design',
                'html':
                        
    /* recto de la carte */
                  
                        "<div class='cote recto'>" +
                            "<span class='titre'>" + "<h5>" + item.Titre + "</h5>" + "</span>" +
                             "<img class='img-responsive' alt='Image illustrative en attendant' src=" + item.llustration_URL + ">" +
                            "<span class='categorie'>" + "<h4>" +  item.Catégorie  + "</h4>" + "</span>" +
                        "</div>"   +  
                  
    /* verso de la carte */
                  
                        "<div class='cote verso'>" +
                            "<span class='titre'>" + "<h5>" + item.Titre + "</h5>" + "</span>" +
                            "<span class='matos'>" + "<p>" + item.Matériel + "</p>" + "</span>" + "<br>" +
                            "<span class='description'>" + "<p>" + item.Description + "</p>" + "</span>" + "<br>" +
                            "<span class='duree'>" + "<p>" + item.Durée + " min." + "</p>" + "</span>" +
                            "<span class='personne'>" +  "<p>" + item.NB_Pers + " pers." + "</p>" +  "</span>" +
                        "</div>" +
                    "</div>" + 
                "</div>"
          

                }).appendTo('#cartes')
                  .click(function(){
                        $(this).addClass('flipped');
                    })
                  .mouseleave(function(){
                            $(this).removeClass('flipped');
                    });
                          
                
            });  
    
            
    /* activer jquery isotope */
    
        var $grid = $("#cartes").isotope({
        itemSelector: ".carte",
        layoutMode: "fitRows",
        animationEngine: "best-available"
        });

    /* Filtres */
    
        // Enregistrement du filtre pour chaque groupe
    
            var filters = {};
    
        $(".filters").on( 'click', '.button', function() {
            var $this = $(this);
          // obtenir la clef de chaque groupe
          var $buttonGroup = $this.parents('.button-group');
          
            var filterGroup = $buttonGroup.attr('data-filter-group');
            // mettre en place le filtre de groupe
            
            filters[ filterGroup ] = $this.attr('data-filter');
            
            // combiner les filtres
            var filterValue = concatValues( filters );
            
            
                $grid.isotope({ filter: filterValue });
            
        });

        // flatten object by concatting values (suite déroulement isotope)
        function concatValues( obj ) {
          var value = "";
          for ( var prop in obj ) {
            value += obj[ prop ];
          }
          return value;
        }

    });            
});  
            
        
            

                
       
   
            
