//# Projects "Database" #//

//- Shortcuts -
function ppDescSamples(type, url, title) {
    var el;
    if(type == 'img') {
        el = `<div class="pp-img"><div><div><img loading="eager" src="`+ url +`"/></div></div>
                <div class="pp-img-desc">`+ title +`</div></div>`
    } else if(type == 'link') {
        el = `<div class="pp-btn-c"><a class="pp-btn" href="`+ url +`" target="_blank"><span>`+ title +`
                <svg viewBox="0 0 32 32"><path d="M21.5,20.5v4h-14v-14h4c1.7,0,3-1.3,3-3l-10,0v20h20l0-10C22.8,17.5,21.5,18.8,21.5,20.5z"/><path d="M14.5,17.5L14.5,17.5c-0.6-0.6-0.6-1.5,0-2.1l8.9-8.9l2.1,2.1l-8.9,8.9C16,18.1,15.1,18.1,14.5,17.5z M24.5,7.5h-7l0-3h10v10l-3,0V7.5z"/>
                </svg></span></a></div>`
    }
    return el;
}
const srcP = '../src/projects/';

/* --- SAMPLES ---
    <h2>BigTitle</h2>

    <h3>LilTitle</h3>

    <p>Text</p>

    <p>Paragraph
    <br>Paragraph
    <br>Paragraph</p>

    ppDescSamples('img', 'src', 'Image')

    ppDescSamples('link', 'somewhereontheweb', 'Link')
*/

//- Data -
const data = {
    'artworks' : {
        'sch_t_iv' : {
            type : 'img', suType : 'img',
            year : '2020', month : '01', tag: 'perso',
            title : `SHOOTING STARS`,
            desc : {
                fr : `
                    <h2>EXPÉRIMENTATION</h2>
                    <p>Création d'une sensation de mouvement avec du contraste et des formes vectorielles en utilisant Adobe Illustrator.</p>
                    <h2>INTERPRÉTATION</h2>
                    <p>Les formes se croisent et s’empilent, elles alternent l’utilisation du noir et du blanc. Il n’y a aucune autre teinte.</p>
                `,
                en : `
                    <h2>EXPERIMENTATION</h2>
                    <p>Creating an impression of movement with contrast and vectors using Adobe Illustrator.</p>
                    <h2>INTERPRETATION</h2>
                    <p>The shapes overlap and stack, alternating the use of black and white. There are no other shades.</p>
                `,
            }
        },
        'sch_t_pm' : {
            type : 'img', suType : 'img',
            year : '2019', month : '10', tag: 'sch',
            title : `FORSAKEN DOVE`,
            subtitle : `What are we going to do with the dove?`,
            desc : {
                fr : `
                    <h2>SUJET</h2>
                    <p>Le sujet consiste en l'incrustation d'une peinture sur un support mural afin de créer entre eux un lien spécifique.</p>
                    <h2>INSPIRATION</h2>
                    <p>L'œuvre “The Armoured Dove” de Banksy, un célèbre street-artiste britannique, m’a inspiré dans la réalisation de ce projet.</p>
                    `+ ppDescSamples('img', srcP + 'artworks/sch_t_pm/05 colombe Banksy.jpg', '"The Armoured Dove", Banksy (2005)') +`
                    <p>Sa colombe a été peinte en 2005 sur un mur séparant Israël et la Palestine. Pour lui ce mur est une tentative absurde pour mettre fin au conflit. La colombe étant un symbole de pureté et de paix, Banksy l'a totalement exposée à la violence. Un pointeur vise son cœur.</p>
                    <h2>L’ABANDONNÉE</h2>
                    <p>Dans mon projet, j’ai choisi de faire de même en l’abandonnant dans un lieu sale et délaissé.
                    <br>Je n’avais pas de lieu de ce genre donc j’ai peint la colombe à l’aquarelle sur une feuille, et je l’ai incrustée numériquement sur un mur.</p>
                    `+ ppDescSamples('img', srcP + 'artworks/sch_t_pm/01 colombe originale.jpg', 'Colombe peinte à l\'aquarelle') +`
                    <p>Puis j’ai incrusté une cage posée devant elle. Elle est coincée dans cet endroit. Paniquée, le bec ouvert et les ailes écartées. Les couleurs sont très ternes et sombres afin de donner une impression de détresse.</p>
                `,
                en : `
                    <h2>TOPIC</h2>
                    <p>The aim is to create a specific link between a painting and a wall support.</p>
                    <h2>INSPIRATION</h2>
                    <p>The work "The Armoured Dove" by Banksy, a famous British street-artist, inspired me to make this project.</p>
                    `+ ppDescSamples('img', srcP + 'artworks/sch_t_pm/05 colombe Banksy.jpg', '"The Armoured Dove", Banksy (2005)') +`
                    <p>His dove was painted in 2005 on a wall separating Israel and Palestine. For him, this wall is an absurd attempt to end the conflict. The dove being a symbol of purity and peace, Banksy has totally exposed it to violence. A pointer is aiming at its heart.</p>
                    <h2>THE FORSAKEN ONE</h2>
                    <p>In my project, I chose to do likewise by abandoning it in a dirty and neglected place.
                    <br>I didn't know where to find such a place so I painted the dove on paper and digitally overlaid it on a wall.</p>
                    `+ ppDescSamples('img', srcP + 'artworks/sch_t_pm/01 colombe originale.jpg', 'Painted dove with watercolours') +`
                    <p>Then I put a cage in front of it. It is trapped in this place. Panicked, the beak open and the wings spread. The colours are very dull and dark to give an impression of despair.</p>
                `,
            }
        },
        'stargazing_a' : {
            type : 'img', suType : 'img',
            year : '2018', month : '10', tag: 'rs',
            title : `STARGAZING`,
            subtitle : `Disrupting the stars when they sleep.`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>"STARGAZING" est un projet de film avec la boîte de production de mon ami aspirant réalisateur. C’était initialement une affiche pour une campagne de financement participatif.</p>
                    <p>Cependant, on a préféré se focaliser sur nos études et d'autres projets, donc il n'a pas encore abouti.</p>
                    <h2>COMPOSITION</h2>
                    <p>La scène a été composée numériquement sur Photoshop : le ciel, la voiture, le personnage, le brouillard, la lumière et l’herbe sont tous sur des calques différents.</p>
                    <p>La lumière du véhicule éblouit et crée un halo autour du personnage, le mettant en valeur.</p>
                `,
                en : `
                    <h2>CONTEXT</h2>
                    <p>"STARGAZING" is a movie idea with my aspiring filmmaker friend. It was originally a poster for a crowdfunding campaign.</p>
                    <p>However, we preferred to focus on our studies and other projects, so it hasn't yet happened.</p>
                    <h2>COMPOSITION</h2>
                    <p>The scenery was digitally composed in Photoshop: the sky, the car, the character, the fog, the light and the grass are all on different layers.</p>
                    <p>The lights of the vehicle dazzle and create a halo around the character, highlighting him.</p>
                `,
            }
        },
        'y_in_b' : {
            type : 'img', suType : 'img',
            year : '2018', month : '09', tag: 'perso',
            title : `Y IN THE BLACK`,
            subtitle : `Right in front of the only light`,
            desc : {
                fr : `
                    <h2>JEU DE LUMIÈRE</h2>
                    <p>L’unique source de lumière permet un grand contraste avec la noirceur plate de l’arrière-plan et le relief des éléments de la scène.</p>
                    <p>J’ai disposé un Y en carton sur un support et avec le flash de mon smartphone j'ai fait apparaître le plus de détails possibles.</p>
                `,
                en : `
                    <h2>LIGHT PLAY</h2>
                    <p>The single light source provides a strong contrast between the flat blackness of the background and the sharpness of the scene elements.</p>
                    <p>I placed a Y-shaped cardboard statue on a surface and with the flash of my smartphone I tried to bring up as much details as possible.</p>
                `,
            }
        },
        'fut_met' : {
            type : 'img', suType : 'img',
            year : '2017', month : '06', tag: 'perso',
            title : `FUTURISTIC METEORITE`,
            subtitle : `From what kind of place is it coming from?`,
            desc : {
                fr : `
                    <h2>IMAGINATION</h2>
                    <p>Notre ignorance du fin fond de l’espace m’a donné envie d’imaginer une météorite venant d’une autre civilisation. Elle file à toute vitesse vers le spectateur depuis un endroit inconnu.</p>
                    <h2>CONTEXTE</h2>
                    <p>C’est l'un de mes premiers projets graphiques et aussi l'un de mes favoris.</p>
                    <h2>DIFFUSION</h2>
                    <p>J'ai eu la surprise de découvrir qu'un auteur du nom de Pierre-Jérôme Delage avait réutilisé ma météorite pour illustrer son article "À qui appartiennent les météorites ?" !</p>
                    `+ ppDescSamples('link', 'https://droitetsf.hypotheses.org/78', 'ACCÉDER À L\'ARTICLE') +`
                `,
                en : `
                    <h2>IMAGINATION</h2>
                    <p>Our lack of knowledge of the far reaches of space made me want to imagine a meteorite coming from another civilization. It is rushing towards the viewer from an unknown place.</p>
                    <h2>CONTEXT</h2>
                    <p>This is one of my first graphic project and also one of my favourites.</p>
                    <h2>DISPLAY</h2>
                    <p>I was surprised to find out that an author named Pierre-Jérôme Delage had illustrated his article "Who do meteorites belong to?" (title translated) with my meteorite !</p>
                    `+ ppDescSamples('link', 'https://droitetsf.hypotheses.org/78', 'ACCESS ARTICLE') +`
                `,
            }
        },
        'destr_casque' : {
            type : 'img', suType : 'img',
            year : '2016', month : '12', tag: 'fun',
            title : `HAMMER ON BROKEN HEADSET`,
            subtitle : `Breaking it even more. Why wouldn't I?`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>Pour honorer le bon temps passé avec un casque audio de la marque Logitech qui était tombé en panne et que j'affectionnais tout particulièrement, j’ai décidé de me filmer le détruisant à coup de marteau.</p>
                    <p>J’ai publié cette vidéo sur YouTube dont j’ai fait la miniature ci-contre.</p>
                `,
                en : `
                    <h2>CONTEXT</h2>
                    <p>To commemorate the good times spent with a Logitech headset that had broken down and that I was particularly fond of, I decided to film myself destroying it with a hammer.</p>
                    <p>I posted this video on YouTube and made the thumbnail shown here.</p>
                `,
            }
        }
    },

    'renders' : {
        'mc_factory92' : {
            type : 'vid', suType : 'interact',
            year : '2021', month : '01', tag: 'c',
            url : 'jN7L44_-igk', format : '1:1',
            title : `FACTORY-92`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>La structure est une construction faite sur Minecraft par un ami du nom de Browlin.
                    <br>J'ai réalisé la présentation.</p>
                    <h2>AMBIANCE</h2>
                    <p>L’ambiance d’usine plutôt orange rouille est contrastée par l’énergie bleue qui s’échappe des réacteurs.</p>
                    <h2>DIFFUSION</h2>
                    `+ ppDescSamples('link', 'https://twitter.com/Browlin__/status/1356267490083557376', 'PARTAGÉ SUR TWITTER') +`
                `,
                en : `
                    <h2>CONTEXT</h2>
                    <p>This structure is a Minecraft build made by a friend named Browlin.
                    <br>I only did the presentation.</p>
                    <h2>AMBIANCE</h2>
                    <p>The rather rusty orange factory atmosphere is contrasted by the blue energy escaping from the reactors.</p>
                    <h2>DISPLAY</h2>
                    `+ ppDescSamples('link', 'https://twitter.com/Browlin__/status/1356267490083557376', 'SHARED ON TWITTER') +`
                `,
            }
        },
        'mc_cyber_district1' : {
            type : 'img', suType : 'img',
            year : '2019', month : '08', tag: 'ppm',
            title : `CYBER-DISTRICT`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>La structure est une construction faite sur Minecraft par la Pamplemousse (équipe de joueurs).
                    <br>J'ai réalisé la présentation avec un ami.</p>
                    <h2>UN QUARTIER LUMINEUX</h2>
                    <p>Les couleurs vives des faisceaux lumineux et des panneaux d'affichages se mélangent et se diffusent dans le ciel sombre.</p>
                    <h2>DIFFUSION</h2>
                    `+ ppDescSamples('link', 'https://twitter.com/PamplemousseBT/status/1167110044867072000', 'PARTAGÉ SUR TWITTER') +`
                `,
                en : `
                    <h2>CONTEXT</h2>
                    <p>This structure is a Minecraft build made by the Pamplemousse (building team on the game).
                    <br>I and a friend did the presentation.</p>
                    <h2>A LUMINOUS DISTRICT</h2>
                    <p>The vibrant colours of the light beams and billboards blend and spread into the dark sky.</p>
                    <h2>DISPLAY</h2>
                    `+ ppDescSamples('link', 'https://twitter.com/PamplemousseBT/status/1167110044867072000', 'SHARED ON TWITTER') +`
                `,
            }
        },
        'mc_cyber_district2' : {
            type : 'img', suType : 'img',
            year : '2019', month : '08', tag: 'ppm',
            title : `CYBER-DISTRICT (LARGE)`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>La structure est une construction faite sur Minecraft par la Pamplemousse (équipe de joueurs).
                    <br>J'ai réalisé la présentation avec un ami.</p>
                    <h2>DENSITÉ</h2>
                    <p>Ce plan large a pour but de mettre en valeur le grand nombre de détails de cette structure.</p>
                    <h2>DIFFUSION</h2>
                    `+ ppDescSamples('link', 'https://twitter.com/PamplemousseBT/status/1167110044867072000', 'PARTAGÉ SUR TWITTER') +`
                `,
                en : `
                    <h2>CONTEXT</h2>
                    <p>This structure is a Minecraft build made by the Pamplemousse (building team on the game).
                    <br>I and a friend did the presentation.</p>
                    <h2>DENSITY</h2>
                    <p>This wide shot's aim is to highlight the great number of details of this structure.</p>
                    <h2>DISPLAY</h2>
                    `+ ppDescSamples('link', 'https://twitter.com/PamplemousseBT/status/1167110044867072000', 'SHARED ON TWITTER') +`
                `,
            }
        },
        'sch_1_wc' : {
            type : 'vid', suType : 'interact',
            year : '2019', month : '03-06', tag: 'sch',
            url : 'Cg0DBZRAbqU', format : '1:1',
            title : `WHITE CITY`,
            subtitle : `As the days passes, everything's staying the same...`,
            desc : {
                fr : `
                    <h2>SUJET</h2>
                    <p>Le sujet était de représenter la ville sans évoquer ses plus gros clichés.</p>
                    <p>J’ai choisi de représenter son manque de personnalité en mettant en avant sa hauteur et sa répétitivité depuis le point de vue d’un piéton à travers le temps.</p>
                    <h2>CRÉATION</h2>
                    <p>En m’aidant du logiciel Cinema 4D, je l’ai entièrement créée en 3D.</p>
                    `+ ppDescSamples('img', srcP + '3d-renders/sch_1_wc/02 pts de vues 3D.jpg', 'Vues de la scène en 3D sur 4 axes différents') +`
                    
                    <p>Puis j’ai placé la caméra dans un carrefour.
                    <br>J’ai modifié beaucoup de paramètres pour donner une impression vertigineuse : le point de fuite est déplacé dans le croisement des bâtiments et le champ de vision est étiré.</p>
                    `+ ppDescSamples('img', srcP + '3d-renders/sch_1_wc/01 camera 3D.jpg', 'Paramètres de la caméra') +`
                    
                    <p>J’ai simulé le déroulement du cycle jour/nuit et j’ai fait le rendu des images en vidéo.</p>
                    <h2>POST-PRODUCTION</h2>
                    <p>Sur VEGAS Pro, j’ai ajouté de nombreux effets pour polir le timelapse : de la brume, du grain, et surtout des effets lumineux pour le soleil. Le lever et le coucher sont plus colorés. J’ai simulé l’éblouissement en ajustant le contraste et le vignettage.</p>
                    `+ ppDescSamples('img', srcP + '3d-renders/sch_1_wc/04 montage en gros.jpg', 'Montage des effets vidéos') +`
                `,
                en : `
                    <h2>TOPIC</h2>
                    <p>The aim was to represent the city without bringing up its biggest clichés.</p>
                    <p>I chose to depict its lack of character by emphasizing its height and repetitiveness from the point of view of a pedestrian across time.</p>
                    <h2>CREATION</h2>
                    <p>I created it entirely in 3D using Cinema 4D.</p>
                    `+ ppDescSamples('img', srcP + '3d-renders/sch_1_wc/02 pts de vues 3D.jpg', 'Scene overview on 4 different axes') +`
                    
                    <p>Then I placed the camera in an intersection.
                    <br>I adjusted a lot of the camera settings to give it a dizzying effect: the vanishing point is shifted in the crossing of the buildings in the sky and the field of view is stretched.</p>
                    `+ ppDescSamples('img', srcP + '3d-renders/sch_1_wc/01 camera 3D.jpg', 'Camera settings') +`
                    
                    <p>I added a day/night cycle and rendered the frames in a video.</p>
                    <h2>POST-PRODUCTION</h2>
                    <p>On VEGAS Pro, I added many effects to refine the timelapse: haze, grain, and especially light effects for the sun. The sunrise and sunset are more colorful. I tried to fake the sun glare by adjusting the contrast and other effects.</p>
                    `+ ppDescSamples('img', srcP + '3d-renders/sch_1_wc/04 montage en gros.jpg', 'Video effects') +`
                `,
            }
        }
    },

    'motion-design' : {
        'pub_sc_lc' : {
            type : 'vid', suType : 'interact',
            year : '2021', month : '02-04', tag: 'sc',
            url : '66QpHMgmXLM', format : '16:9',
            title : `PUB: "LES CONNECTÉS"`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>Après avoir obtenu mon baccalauréat, je me suis porté volontaire dans une mission de Service Civique que l'association Unis-Cité proposait : "Les Connectés".</p>
                    <p>Elle consistait à parcourir tout le département du Cantal afin d'aller à la rencontre des personnes ayant besoin d'aide pour devenir autonomes avec les outils informatiques (clavier, souris, applications...).</p>
                    <p>
                    <br>Nous avons réalisé des vidéos pour chaque lieu public dans lesquels on intervenait afin qu'ils les diffusent sur leurs réseaux sociaux.</p>
                    <h2>PERSONNALISATION</h2>
                    <p>Les vidéos ont été personnalisées en fonction de nos interventions dans chaque lieu : en atelier individuel ou collectif, avec ou sans inscription.</p>
                    <h2>MONTAGE</h2>
                    <p>C'est la première fois que je bossais sur un projet de ce genre en tant que "directeur" improvisé et monteur.</p>
                    <p>La voix-off que vous entendez dans cette vidéo est la mienne.</p>
                `,
                en : `
                    <h2>CONTEXT</h2>
                    <p>After obtaining my baccalauréat, I volunteered in "Les Connectés" (~ "The Connected"), a Service Civique mission of the association Unis-Cité.</p>
                    <p>It consisted in going across the Cantal department in France to meet people who needed help learning how to use computer tools (keyboard, mouse, applications...).</p>
                    <p>
                    <br>We made videos for each places in which we were intervening so that they could broadcast them on their social networks.</p>
                    <h2>PERSONALIZATION</h2>
                    <p>The videos were customised to fit our interventions in each place: as individual or group sessions, with or without registration.</p>
                    <h2>EDITING</h2>
                    <p>It was my first time working on a project of this kind as an improvised "director" and editor.</p>
                    <p>The voice-over you hear in this video is my voice.</p>
                `,
            }
        },
        'i_rs_b' : {
            type : 'vid', suType : 'interact',
            year : '2018', month : '09', tag: 'rs',
            url : 'XOnAthClcEI', format : '16:9',
            title : `RETROSATURN β`,
            subtitle : `Synthwave into the darkest place of space!`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>Cette animation a été réalisée pour essayer le logo de la future boîte de production d'un ami.</p>
                    <h2>AMBIANCE</h2>
                    <p>Le but était de réaliser une introduction, style Synthwave/années 80s avec le quadrillage typique, les néons, les étoiles, les glitchs...</p>
                    <p>J'ai ajouté des effets sonores pour amplifier l'ambiance.</p>
                    <p>
                    <br>Cependant, le rendu final est un peu trop sombre et pesant.</p>
                `,
                en : `
                    <h2>CONTEXT</h2>
                    <p>This animation was made to experiment with the logo of my friend's future film production company.</p>
                    <h2>AMBIANCE</h2>
                    <p>The goal was to take inspiration from the Synthwave/80s style with the typical grid, neons, stars, glitches...</p>
                    <p>I also added some sound effects to intensify the atmosphere.</p>
                    <p>
                    <br>But the final result is a little too dark and heavy.</p>
                `,
            }
        },
        'i_jfm' : {
            type : 'vid', suType : 'interact',
            year : '2017', month : '12', tag: 'c',
            url : 'Gyho58zddwg', format : '16:9',
            title : `JordanneFM`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>Un ami m'avait demandé lors de la réalisation d'une vidéo promotionnelle pour JordanneFM d'animer leur logo. Par la suite, JordanneFM l'a utilisé pour ses émissions.</p>
                `,
                en : `
                    <h2>CONTEXT</h2>
                    <p>While a friend was making a promotional video for JordanneFM, he asked me to animate their logo. Afterwards, JordanneFM used it for some of their videos.</p>
                `,
            }
        },
        'i_y2' : {
            type : 'vid', suType : 'interact',
            year : '2017', month : '09', tag: 'perso',
            url : 'UkL4zVUw27Y', format : '16:9',
            title : `YOLAN' v2`,
        },
        'i_inex' : {
            type : 'vid', suType : 'interact',
            year : '2017', month : '03', tag: 'c',
            url : '46MrLGy5Xb8', format : '16:9',
            title : `iNEX`,
        },
        'i_yc' : {
            type : 'vid', suType : 'interact',
            year : '2017', month : '01', tag: 'perso',
            url : 'PR0fVAGbHIQ', format : '16:9',
            title : `YOLAN' & CLÉMENT`,
        }
    },

    'logos' : {
        'b_l1_jethro' : {
            type : 'img', suType : 'img', imgExt : 'png', white : true,
            year : '2018', month : '12', tag: 'c',
            title : `JETHRO`,
        },
        'b_l1_ppm' : {
            type : 'img', suType : 'img', imgExt : 'png',
            year : '2018', month : '10', tag: 'ppm',
            title : `PAMPLEMOUSSE`,
        },
        'b_l1_rs' : {
            type : 'img', suType : 'img', imgExt : 'png',
            year : '2018', month : '06', tag: 'rs',
            title : `RETROSATURN`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>"RETROSATURN" est la boîte de production de mon ami aspirant réalisateur.</p>
                    <h2>CONCEPTION</h2>
                    <p>Nous avons conçu ce logo ensemble afin d'obtenir quelque chose d'orienté années 80s.</p>
                    <p>Il y a énormément de détails, comme l’irrégularité des couleurs et intensités des néons, la texture et la dynamique du mot "SATURN", le grain...</p>
                `,
                en : `
                    <h2>CONTEXTE</h2>
                    <p>"RETROSATURN" is the company of my aspiring filmmaker friend.</p>
                    <h2>CONCEPTION</h2>
                    <p>We designed this logo together to get a 80s feel to it.</p>
                    <p>There are a lot of details, like the irregular color and intensity of the neon lights, the texture and dynamism of the word "SATURN", the grain...</p>
                `,
            }
        },
        'b_l2_rs' : {
            type : 'img', suType : 'img', imgExt : 'png',
            year : '2019', month : '01', tag: 'rs',
            title : `RETROSATURN`,
        },
        'b_l1_wzr' : {
            type : 'img', suType : 'img', imgExt : 'png',
            year : '2017', month : '09', tag: 'c',
            title : `WzR`,
        },
        'b_l1_caloucath' : {
            type : 'img', suType : 'img', imgExt : 'png',
            year : '2017', month : '07', tag: 'c',
            title : `CALOUCATH`,
        },
        'b_l1_nensho' : {
            type : 'img', suType : 'img', imgExt : 'png',
            year : '2017', month : '05', tag: 'c',
            title : `NENSHO`,
        }
    },

    'banners' : {
        'b_b1_ppm' : {
            type : 'img', suType : 'img',
            year : '2019', month : '04', tag: 'ppm',
            title : `PAMPLEMOUSSE`,
        },
        'b_b1_rs' : {
            type : 'img', suType : 'img',
            year : '2018', month : '09', tag: 'rs',
            title : `RETROSATURN`,
        },
        'b_b2_caloucath' : {
            type : 'img', suType : 'img',
            year : '2017', month : '09', tag: 'c',
            title : `CALOUCATH`,
        },
        'b_b1_caloucath' : {
            type : 'img', suType : 'img',
            year : '2017', month : '05', tag: 'c',
            title : `CALOUCATH`,
        },
        'b_b1_rezartilo' : {
            type : 'img', suType : 'img',
            year : '2017', month : '01', tag: 'c',
            title : `REZARTILO`,
        },
        'b_b2_mattmovie' : {
            type : 'img', suType : 'img',
            year : '2017', month : '02', tag: 'c',
            title : `MATTMOVIE`,
        },
        'b_b1_mattmovie' : {
            type : 'img', suType : 'img',
            year : '2016', month : '11', tag: 'c',
            title : `MATTMOVIE`,
        },
        'b_b1_killex' : {
            type : 'img', suType : 'img',
            year : '2016', month : '03', tag: 'c',
            title : `KILLEX`,
        }
    },

    'posters' : {
        'pdf_apc_hpi' : {
            type : 'pdf', suType : 'interact',
            url : '1J0SOaGtPElDcgNwxXx55vr_E_ah3cZDc',
            year : '2019', month : '11', tag: 'c',
            titleMini : `CONFÉRENCE H.P.I.`,
            title : `CONFÉRENCE HAUT POTENTIEL INTELLECTUEL`,
        },
        'pdf_apc_wvhp' : {
            type : 'pdf', suType : 'interact',
            url : '1bCm600IXEowAT_jnyQLQcYP05QcAATYr',
            year : '2019', month : '08', tag: 'c',
            titleMini : `FORMATION WISC-V & H.P.`,
            title : `FORMATION WISC-V & HAUT POTENTIEL`,
        }
    },

    'websites' : {
        'w_vh' : {
            type : 'web', suType : 'interact',
            url : 'https://valentinhebert.com', format : 'fill',
            year : '2020.10-2021', month : '01', tag: 'c',
            title : `VALENTIN HÉBERT`,
            desc : {
                fr : `
                    <h2>CONTEXTE</h2>
                    <p>Ce site Internet fait partie des tout premiers que j’ai créés.</p>
                `,
                en : `
                    <h2>CONTEXT</h2>
                    <p>This website is one of the very first I have created.</p>
                `,
            }
        }
    },

    'other' : {
    },
};


const menuData = {
    "artworks" : {
        title: "ARTWORKS",
        icon : '<path d="M21.5,7.3c1.8,0,3.2,1.5,3.2,3.2s-1.5,3.2-3.2,3.2s-3.2-1.5-3.2-3.2S19.7,7.3,21.5,7.3 M11.6,12l2.9,8.5c0,0,3.6-4.1,3.6-4.1l4.8,8.8c-1.9,1.4-4.3,2.3-6.9,2.3c-5.8,0-10.7-4.3-11.4-10C4.6,17.5,11.6,12,11.6,12 M17.9,6.7c0.7-0.6,1.6-1.1,2.6-1.3l0,0c-1.4-0.6-2.9-0.9-4.5-0.9l0,0C10,4.5,5,9.1,4.5,15l2.4-1.9c1.2-3.8,4.8-6.6,9.1-6.6C16.7,6.5,17.3,6.6,17.9,6.7L17.9,6.7z M25.3,14.1c0.1,0.6,0.2,1.2,0.2,1.9c0,2.2-0.8,4.3-2.1,6l1,1.9c1.9-2.1,3.1-4.8,3.1-7.9c0-1.6-0.3-3.1-0.9-4.5l0,0C26.4,12.5,26,13.4,25.3,14.1L25.3,14.1z"/>',
    },
    "renders" : {
        title: "3D RENDERS",
        icon : '<path d="M26.2,15.6c2.9,1.1,4.9,2.7,4.9,4.8c0,4.1-7.8,6.3-15.1,6.3c-7.3,0-15.1-2.2-15.1-6.3c0-2.1,2-3.7,4.9-4.8l0,2.5c-1.7,0.7-2.6,1.6-2.6,2.3c0,1.6,5,4,12.8,4c7.8,0,12.8-2.4,12.8-4c0-0.7-0.9-1.6-2.6-2.3L26.2,15.6z M17.2,15.1v6.4l6.7-3.9v-6.4L17.2,15.1z M8.1,17.6l6.7,3.9v-6.4l-6.7-3.9V17.6z M9.3,9.2l6.7,3.9l6.7-3.9L16,5.3L9.3,9.2z"/>',
    },
    "motion-design" : {
        title: "MOTION DESIGN",
        icon : '<path d="M2.1,20.4c1.5,2.6,4.4,4.4,7.6,4.4c1.1,0,2.1-0.2,3.1-0.6c-1-1.1-1.8-2.4-2.3-3.8L2.1,20.4z M10.5,11.6c0.5-1.4,1.3-2.7,2.3-3.8c-1-0.4-2-0.6-3.1-0.6c-3.3,0-6.1,1.8-7.6,4.4L10.5,11.6z M9.9,17.9H2.8c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h7.1c1,0,1.9,0.8,1.9,1.9v0C11.7,17,10.9,17.9,9.9,17.9z M31.1,16c0,4.9-4,8.8-8.8,8.8s-8.8-4-8.8-8.8s4-8.8,8.8-8.8S31.1,11.1,31.1,16z M19.6,20.4l7.7-4.4l-7.7-4.4V20.4z"/>',
    },
    "logos" : {
        title: "LOGOS",
        icon : '<path d="M15.3,23.4l-5,3.5c-0.9,0.6-2.2-0.2-1.8-1.3l1.8-5.8c0.1-0.5,0-1-0.4-1.3L5,14.7c-0.9-0.7-0.4-2.1,0.7-2.2l6.1-0.1c0.5,0,0.9-0.3,1.1-0.8l2-5.7c0.4-1.1,1.9-1.1,2.3,0l2,5.7c0.2,0.5,0.6,0.8,1.1,0.8l6.1,0.1c1.1,0,1.6,1.5,0.7,2.2l-4.8,3.7c-0.4,0.3-0.6,0.8-0.4,1.3l1.8,5.8c0.3,1.1-0.9,2-1.8,1.3l-5-3.5C16.3,23.1,15.7,23.1,15.3,23.4z"/>',
    },
    "banners" : {
        title: "BANNERS",
        icon : '<path d="M15.3,23.4l-5,3.5c-0.9,0.6-2.2-0.2-1.8-1.3l1.8-5.8c0.1-0.5,0-1-0.4-1.3L5,14.7c-0.9-0.7-0.4-2.1,0.7-2.2l6.1-0.1c0.5,0,0.9-0.3,1.1-0.8l2-5.7c0.4-1.1,1.9-1.1,2.3,0l2,5.7c0.2,0.5,0.6,0.8,1.1,0.8l6.1,0.1c1.1,0,1.6,1.5,0.7,2.2l-4.8,3.7c-0.4,0.3-0.6,0.8-0.4,1.3l1.8,5.8c0.3,1.1-0.9,2-1.8,1.3l-5-3.5C16.3,23.1,15.7,23.1,15.3,23.4z"/>',
    },
    "posters" : {
        title: "POSTERS",
        icon : '<path d="M6.2,23L6,25.6c0,1,0.8,1.9,1.9,1.9H21c-0.3-0.5-0.5-1.2-0.5-1.9l0.1-2.6L6.2,23z M24,27.5c1,0,1.9-0.8,1.9-1.9V8.5l0.2-4H9.7l-0.1,4l0,12.9l12.7,0l-0.1,4.2C22.1,26.7,22.9,27.5,24,27.5z M21.4,17.6H14v-1.8h7.4V17.6z M21.4,13.9H14v-1.8h7.4V13.9zM21.4,10.2H14V8.3h7.4V10.2z"/>',
    },
    "other" : {
        title: "OTHER FUNKY STUFF",
        icon : '<path d="M22.4,7.9l1.3,2.3L20,12.4l-9.5,2.5L22.4,7.9 M23,5.6L4.5,16.5L5,17.7l20.8-6.3l0.2-0.6L23,5.6L23,5.6z"/><path d="M24.8,12.8l0.7,2.5l-4.4,1.2l-10.2,0L24.8,12.8 M26,10.8L4.5,16.5L5,17.7l21.4-0.7l1.2-0.5L26,10.8L26,10.8z"/><path d="M27.5,26.4h-23v-9.8h23V26.4z M22.6,23.8H25v-4.8h-2.3V23.8z M18.3,23.8h2.3v-4.8h-2.3V23.8zM13.9,23.8h2.3v-4.8h-2.3V23.8z M9,19.3c-1.2,0-2.1,1-2.1,2.1c0,1.2,1,2.1,2.1,2.1s2.1-1,2.1-2.1C11.2,20.3,10.2,19.3,9,19.3z"/>'
    },

    /* --- unused
    "brandings" : {
        title: "BRANDINGS",
        icon : '<path d="M15.3,23.4l-5,3.5c-0.9,0.6-2.2-0.2-1.8-1.3l1.8-5.8c0.1-0.5,0-1-0.4-1.3L5,14.7c-0.9-0.7-0.4-2.1,0.7-2.2l6.1-0.1c0.5,0,0.9-0.3,1.1-0.8l2-5.7c0.4-1.1,1.9-1.1,2.3,0l2,5.7c0.2,0.5,0.6,0.8,1.1,0.8l6.1,0.1c1.1,0,1.6,1.5,0.7,2.2l-4.8,3.7c-0.4,0.3-0.6,0.8-0.4,1.3l1.8,5.8c0.3,1.1-0.9,2-1.8,1.3l-5-3.5C16.3,23.1,15.7,23.1,15.3,23.4z"/>',
    },
    "websites" : {
        title: "WEBSITES",
        icon : '<path d="M16,6.5c5.2,0,9.5,4.3,9.5,9.5s-4.3,9.5-9.5,9.5S6.5,21.2,6.5,16S10.8,6.5,16,6.5 M16,4.5C9.6,4.5,4.5,9.6,4.5,16S9.6,27.5,16,27.5S27.5,22.4,27.5,16S22.4,4.5,16,4.5L16,4.5z"/><path d="M16,6.5c0.9,0,3.1,3.3,3.1,9.5s-2.2,9.5-3.1,9.5c-0.9,0-3.1-3.3-3.1-9.5S15.1,6.5,16,6.5 M16,4.5c-2.8,0-5.1,5.1-5.1,11.5s2.3,11.5,5.1,11.5s5.1-5.1,5.1-11.5S18.8,4.5,16,4.5L16,4.5z"/><path d="M16,12.9c6.2,0,9.5,2.2,9.5,3.1c0,0.9-3.3,3.1-9.5,3.1S6.5,16.9,6.5,16C6.5,15.1,9.8,12.9,16,12.9 M16,10.9c-6.4,0-11.5,2.3-11.5,5.1s5.1,5.1,11.5,5.1s11.5-2.3,11.5-5.1S22.4,10.9,16,10.9L16,10.9z"/>',
    },
    */
}


export { data, menuData };