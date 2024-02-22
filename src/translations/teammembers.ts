export const translations = {
  /**
   * Team members collection translations
   */
  admin: {
    description: {
      en: 'Create your own team members for your company, club or enterprise and add them to your website.',
      de: 'Erstellen Sie eigene Teammitglieder für Ihr Unternehmen, Ihren Verein oder Ihre Unternehmung und fügen Sie diese auf Ihrer Website ein.',
      fr: "Créez vos propres membres d'équipe pour votre entreprise, votre club ou votre entreprise et ajoutez-les à votre site Web.",
      es: 'Cree sus propios miembros del equipo para su empresa, club o empresa y agréguelos a su sitio web.',
      pt: 'Crie seus próprios membros da equipe para sua empresa, clube ou empresa e adicione-os ao seu site.',
      it: 'Crea i tuoi membri del team per la tua azienda, club o impresa e aggiungili al tuo sito web.',
      nl: 'Maak uw eigen teamleden voor uw bedrijf, club of onderneming en voeg ze toe aan uw website.',
      ru: 'Создайте своих собственных членов команды для своей компании, клуба или предприятия и добавьте их на свой сайт.',
      ja: '会社、クラブ、または企業のために独自のチームメンバーを作成し、ウェブサイトに追加します。',
      zh: '为您的公司、俱乐部或企业创建自己的团队成员，并将其添加到您的网站。',
      pl: 'Utwórz własnych członków zespołu dla swojej firmy, klubu lub przedsiębiorstwa i dodaj je do swojej witryny.',
      sv: 'Skapa dina egna teammedlemmar för ditt företag, klubb eller företag och lägg till dem på din webbplats.',
      cs: 'Vytvořte své vlastní členy týmu pro svou firmu, klub nebo podnik a přidejte je na svůj web.',
      tr: 'Kendi şirketiniz, kulübünüz veya işletmeniz için kendi takım üyelerinizi oluşturun ve web sitenize ekleyin.',
    },
  },
  labels: {
    singular: {
      en: 'Team Member',
      de: 'Teammitglied',
      fr: "Membre de l'équipe",
      es: 'Miembro del equipo',
      pt: 'Membro da equipe',
      it: 'Membro del team',
      nl: 'Teamlid',
      ru: 'Член команды',
      ja: 'チームメンバー',
      zh: '团队成员',
      pl: 'Członek zespołu',
      sv: 'Teammedlem',
      cs: 'Člen týmu',
      tr: 'Takım Üyesi',
    },
    plural: {
      en: 'Team Members',
      de: 'Teammitglieder',
      fr: "Membres de l'équipe",
      es: 'Miembros del equipo',
      pt: 'Membros da equipe',
      it: 'Membri del team',
      nl: 'Teamleden',
      ru: 'Члены команды',
      ja: 'チームメンバー',
      zh: '团队成员',
      pl: 'Członkowie zespołu',
      sv: 'Teammedlemmar',
      cs: 'Členové týmu',
      tr: 'Takım Üyeleri',
    },
  },

  /**
   * Field translations
   */
  fields: {
    /**
     * Text field "Name"
     */
    name: {
      label: {
        en: 'Name',
        de: 'Name',
        fr: 'Nom',
        es: 'Nombre',
        pt: 'Nome',
        it: 'Nome',
        nl: 'Naam',
        ru: 'Имя',
        ja: '名前',
        zh: '名字',
        pl: 'Nazwa',
        sv: 'Namn',
        cs: 'Jméno',
        tr: 'Ad',
      },
      admin: {
        description: {
          en: 'Please enter the name of the team member.',
          de: 'Bitte geben Sie hier den Namen des Teammitglieds ein.',
          fr: "Veuillez saisir le nom du membre de l'équipe.",
          es: 'Por favor, introduzca el nombre del miembro del equipo.',
          pt: 'Por favor, insira o nome do membro da equipe.',
          it: 'Inserisci il nome del membro del team.',
          nl: 'Voer de naam van het teamlid in.',
          ru: 'Пожалуйста, введите имя члена команды.',
          ja: 'チームメンバーの名前を入力してください。',
          zh: '请输入团队成员的姓名。',
          pl: 'Proszę podać imię członka zespołu.',
          sv: 'Ange namnet på teammedlemmen.',
          cs: 'Zadejte jméno člena týmu.',
          tr: 'Lütfen takım üyesinin adını girin.',
        },
      },
    },

    /**
     * Text field "Position"
     */
    position: {
      label: {
        en: 'Position',
        de: 'Position',
        fr: 'Position',
        es: 'Posición',
        pt: 'Posição',
        it: 'Posizione',
        nl: 'Positie',
        ru: 'Позиция',
        ja: 'ポジション',
        zh: '位置',
        pl: 'Pozycja',
        sv: 'Position',
        cs: 'Pozice',
        tr: 'Pozisyon',
      },
      admin: {
        description: {
          en: 'Please enter the position of the team member.',
          de: 'Bitte geben Sie die Position des Teammitglieds ein.',
          fr: "Veuillez saisir la position du membre de l'équipe.",
          es: 'Por favor, introduzca la posición del miembro del equipo.',
          pt: 'Por favor, insira a posição do membro da equipe.',
          it: 'Inserisci la posizione del membro del team.',
          nl: 'Voer de positie van het teamlid in.',
          ru: 'Пожалуйста, введите позицию члена команды.',
          ja: 'チームメンバーのポジションを入力してください。',
          zh: '请输入团队成员的位置。',
          pl: 'Proszę podać pozycję członka zespołu.',
          sv: 'Ange teammedlemmens position.',
          cs: 'Zadejte pozici člena týmu.',
          tr: 'Lütfen takım üyesinin pozisyonunu girin.',
        },
      },
    },

    /**
     * Relationship field: Department
     */
    department: {
      label: {
        en: 'Department',
        de: 'Abteilung',
        fr: 'Département',
        es: 'Departamento',
        pt: 'Departamento',
        it: 'Dipartimento',
        nl: 'Afdeling',
        ru: 'Отдел',
        ja: '部門',
        zh: '部门',
        pl: 'Dział',
        sv: 'Avdelning',
        cs: 'Oddělení',
        tr: 'Departman',
      },
      admin: {
        description: {
          en: 'Please select the department of the team member.',
          de: 'Bitte wählen Sie die Abteilung des Teammitglieds aus.',
          fr: "Veuillez sélectionner le département du membre de l'équipe.",
          es: 'Por favor, seleccione el departamento del miembro del equipo.',
          pt: 'Por favor, selecione o departamento do membro da equipe.',
          it: 'Seleziona il dipartimento del membro del team.',
          nl: 'Selecteer de afdeling van het teamlid.',
          ru: 'Пожалуйста, выберите отдел члена команды.',
          ja: 'チームメンバーの部門を選択してください。',
          zh: '请选择团队成员的部门。',
          pl: 'Wybierz dział członka zespołu.',
          sv: 'Välj teammedlemmens avdelning.',
          cs: 'Vyberte oddělení člena týmu.',
          tr: 'Lütfen takım üyesinin departmanını seçin.',
        },
      },
    },

    /**
     * Email field "Email"
     */
    email: {
      label: {
        en: 'Email',
        de: 'E-Mail',
        fr: 'Email',
        es: 'Correo electrónico',
        pt: 'E-mail',
        it: 'E-mail',
        nl: 'E-mail',
        ru: 'Электронная почта',
        ja: 'Eメール',
        zh: '电子邮件',
        pl: 'E-mail',
        sv: 'E-post',
        cs: 'E-mail',
        tr: 'E-posta',
      },
      admin: {
        description: {
          en: 'Please enter the email of the team member.',
          de: 'Bitte geben Sie die E-Mail des Teammitglieds ein.',
          fr: "Veuillez saisir l'e-mail du membre de l'équipe.",
          es: 'Por favor, introduzca el correo electrónico del miembro del equipo.',
          pt: 'Por favor, insira o e-mail do membro da equipe.',
          it: "Inserisci l'e-mail del membro del team.",
          nl: 'Voer het e-mailadres van het teamlid in.',
          ru: 'Пожалуйста, введите электронную почту члена команды.',
          ja: 'チームメンバーのEメールを入力してください。',
          zh: '请输入团队成员的电子邮件。',
          pl: 'Proszę podać e-mail członka zespołu.',
          sv: 'Ange teammedlemmens e-post.',
          cs: 'Zadejte e-mail člena týmu.',
          tr: 'Lütfen takım üyesinin e-postasını girin.',
        },
      },
    },

    /**
     * Text field "Phone"
     */
    phone: {
      label: {
        en: 'Phone',
        de: 'Telefon',
        fr: 'Téléphone',
        es: 'Teléfono',
        pt: 'Telefone',
        it: 'Telefono',
        nl: 'Telefoon',
        ru: 'Телефон',
        ja: '電話',
        zh: '电话',
        pl: 'Telefon',
        sv: 'Telefon',
        cs: 'Telefon',
        tr: 'Telefon',
      },
      admin: {
        description: {
          en: 'Please enter the phone number of the team member.',
          de: 'Bitte geben Sie die Telefonnummer des Teammitglieds ein.',
          fr: "Veuillez saisir le numéro de téléphone du membre de l'équipe.",
          es: 'Por favor, introduzca el número de teléfono del miembro del equipo.',
          pt: 'Por favor, insira o número de telefone do membro da equipe.',
          it: 'Inserisci il numero di telefono del membro del team.',
          nl: 'Voer het telefoonnummer van het teamlid in.',
          ru: 'Пожалуйста, введите номер телефона члена команды.',
          ja: 'チームメンバーの電話番号を入力してください。',
          zh: '请输入团队成员的电话号码。',
          pl: 'Proszę podać numer telefonu członka zespołu.',
          sv: 'Ange teammedlemmens telefonnummer.',
          cs: 'Zadejte telefonní číslo člena týmu.',
          tr: 'Lütfen takım üyesinin telefon numarasını girin.',
        },
      },
    },

    /**
     * Image field "Image"
     */
    image: {
      label: {
        en: 'Image',
        de: 'Bild',
        fr: 'Image',
        es: 'Imagen',
        pt: 'Imagem',
        it: 'Immagine',
        nl: 'Afbeelding',
        ru: 'Изображение',
        ja: '画像',
        zh: '图片',
        pl: 'Obraz',
        sv: 'Bild',
        cs: 'Obrázek',
        tr: 'Resim',
      },
      admin: {
        description: {
          en: 'Please upload an image of the team member.',
          de: 'Bitte laden Sie ein Bild des Teammitglieds hoch.',
          fr: 'Veuillez télécharger',
          es: 'Por favor, suba una imagen del miembro del equipo.',
          pt: 'Por favor, faça o upload de uma imagem do membro da equipe.',
          it: "Carica un'immagine del membro del team.",
          nl: 'Upload een afbeelding van het teamlid.',
          ru: 'Пожалуйста, загрузите изображение члена команды.',
          ja: 'チームメンバーの画像をアップロードしてください。',
          zh: '请上传团队成员的图片。',
          pl: 'Proszę przesłać obraz członka zespołu.',
          sv: 'Ladda upp en bild på teammedlemmen.',
          cs: 'Nahrajte obrázek člena týmu.',
          tr: 'Lütfen takım üyesinin resmini yükleyin.',
        },
      },
    },
  },
}
