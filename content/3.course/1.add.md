---
title: 'Ajouter une session'
description: 'Ajouter une nouvelle session sur Stoocs'
---

::steps
### Ajouter la nouvelle sessions dans le fichier de configuration:
Editer le fichier de configuration `courses.yml` kjsdf

::alert{to="https://gitlab.inria.fr/learninglab/tools/stoocs/courses/-/blob/main/courses.yml?ref_type=heads" target="_blank" icon="lucide:link"}
  Le fichier est disponible ici
::
Ajouter la nouvelle session en remplissant les informations suivantes:

::field-group
    ::field{name="id" type="texte" required}
    Le numéro du MOOC sur FUN
    ::
    ::field{name="title" type="texte" required}
    Le titre du MOOC
    ::
    ::field{name="organization" type="texte" required}
    L'organisation à qui appartient le cours
    ::
    ::field{name="sessions" type="liste" required}
    La liste des sessions du MOOC
    ::field-group{class="mt-4 ml-4"}
        ::field{name="name" type="texte" required}
        Le nom de la session
        ::
        ::field{name="start" type="date" required}
        La date de début de la session
        ::
        ::field{name="end" type="date"}
        La date de fin de la session
        ::
    ::
    ::
::

### Mettre à jour la liste des MOOCs sur Stoocs
Rendez-vous sur Stoocs et cliquez sur le bouton "Mettre à jour la liste des MOOCs".
::alert{icon="lucide:info}
    Vous pourrez véfifier la liste des changements avant de les appliquer sur Stoocs.
::
::
