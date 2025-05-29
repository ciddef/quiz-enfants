const quizData = {
    fr: {
        title: "Quiz sur les Droits de l'Enfant",
        resultMessages: {
            perfect: "Excellent ! Vous connaissez très bien les droits de l'enfant !",
            good: "Bravo ! Vous avez de bonnes connaissances sur les droits de l'enfant.",
            average: "Pas mal ! Continuez à apprendre sur les droits de l'enfant.",
            poor: "Vous pouvez améliorer vos connaissances. N'hésitez pas à explorer la Convention Internationale des Droits de l'Enfant (CIDE)!"
        },
        questions: [
            {
                question: "Qu'est-ce que la Convention Internationale des Droits de l'Enfant (CIDE) ?",
                image: "./images/illustrations/q1_cide_monde.jpeg",
                image_alt: "Illustration: Enfants divers autour du globe",
                options: [
                    "Un livre de contes sur les enfants du monde",
                    "Un accord international qui protège les droits de tous les enfants",
                    "Un jeu vidéo populaire",
                    "Une chanson sur l'amitié"
                ],
                answer: 1,
                explanation: "La Convention Internationale des Droits de l'Enfant est comme un bouclier magique reconnu par presque tous les pays pour protéger les droits de chaque enfant, partout dans le monde !"
            },
            {
                question: "À partir de quel âge un enfant a-t-il des droits selon la Convention Internationale des Droits de l'Enfant ?",
                image: "./images/illustrations/q2_adolescents.jpeg",
                image_alt: "Illustration: Groupe d'adolescents divers",
                options: [
                    "Seulement quand il sait parler",
                    "À partir de 6 ans",
                    "Dès sa naissance",
                    "Quand il va à l'école"
                ],
                answer: 2,
                explanation: "Dès que tu nais, tu as tous les droits de la Convention Internationale des Droits de l'Enfant, jusqu'à tes 18 ans !"
            },
            {
                question: "À quoi sert la Convention Internationale des Droits de l'Enfant ?",
                image: "./images/illustrations/q3_icones_droits.jpeg",
                image_alt: "Illustration: Icônes représentant différents droits",
                options: [
                    "À donner des devoirs aux enfants",
                    "À choisir les jeux à la récréation",
                    "À s'assurer que les adultes respectent les enfants et les aident à bien grandir",
                    "À organiser des fêtes d'anniversaire"
                ],
                answer: 2,
                explanation: "La Convention Internationale des Droits de l'Enfant rappelle aux adultes (parents, professeurs, gouvernements...) qu'ils doivent tout faire pour que les enfants soient en sécurité, en bonne santé, écoutés et puissent apprendre et jouer."
            },
            {
                question: "Est-ce que l'Algérie a signé et promis de respecter la Convention Internationale des Droits de l'Enfant ?",
                image: "./images/illustrations/q4_enfants_drapeau_algerie.svg",
                image_alt: "Illustration: Enfants tenant le drapeau algérien",
                options: [
                    "Oui",
                    "Non",
                    "Seulement pour les enfants qui vont à l'école",
                    "Je ne sais pas"
                ],
                answer: 0,
                explanation: "Oui ! L'Algérie, comme la grande majorité des pays du monde, s'est engagée à respecter et à mettre en pratique les droits de la Convention Internationale des Droits de l'Enfant pour tous les enfants vivant sur son territoire."
            },
            {
                question: "Combien y a-t-il d'articles (de droits) dans la Convention Internationale des Droits de l'Enfant ?",
                image: "./images/illustrations/q5_document_signature.jpeg",
                image_alt: "Illustration: Document officiel avec signature",
                options: [
                    "10",
                    "100",
                    "54",
                    "25"
                ],
                answer: 2,
                explanation: "Il y a 54 articles dans la Convention Internationale des Droits de l'Enfant ! Chacun décrit un droit important pour les enfants, comme le droit d'aller à l'école, d'être protégé, d'avoir un nom..."
            },
            {
                question: "Avoir un nom et une nationalité (être citoyen d'un pays), est-ce un droit ?",
                image: "./images/illustrations/q6_carte_identite.jpeg",
                image_alt: "Illustration: Carte d'identité stylisée",
                options: [
                    "Non, ce n'est pas important",
                    "Oui, c'est un droit fondamental",
                    "Seulement si les parents le veulent",
                    "Seulement dans certains pays"
                ],
                answer: 1,
                explanation: "Oui ! Dès ta naissance, tu as le droit d'être enregistré, d'avoir un nom, une nationalité et de connaître tes parents. C'est très important pour ton identité."
            },
            {
                question: "Le droit d'aller à l'école est-il inscrit dans la Convention Internationale des Droits de l'Enfant ?",
                image: "./images/illustrations/placeholder_q7.png", // Placeholder
                image_alt: "Description: Illustration montrant des enfants souriants de différentes origines se rendant à l'école avec des cartables.",
                options: [
                    "Non, l'école c'est juste pour apprendre à lire",
                    "Oui, tous les enfants ont le droit à l'éducation",
                    "Seulement pour les garçons",
                    "Seulement si l'école n'est pas loin"
                ],
                answer: 1,
                explanation: "La Convention Internationale des Droits de l'Enfant dit que tous les enfants ont le droit d'aller à l'école gratuitement pour apprendre, développer leurs talents et comprendre le monde."
            },
            {
                question: "As-tu le droit de donner ton avis sur les choses qui te concernent ?",
                image: "./images/illustrations/placeholder_q8.png", // Placeholder
                image_alt: "Description: Illustration montrant des enfants ou des jeunes de différentes origines exprimant leurs opinions (par exemple, avec des bulles de dialogue).",
                options: [
                    "Non, les enfants doivent juste écouter les adultes",
                    "Oui, mais seulement si les adultes sont d'accord",
                    "Oui, ton avis compte et doit être écouté par les adultes",
                    "Seulement quand tu seras grand"
                ],
                answer: 2,
                explanation: "Oui ! Tu as le droit d'exprimer librement ton opinion sur les sujets qui te touchent. Les adultes doivent écouter ton avis et le prendre au sérieux, en fonction de ton âge et de ta maturité."
            },
            {
                question: "La Convention Internationale des Droits de l'Enfant dit que les enfants doivent être protégés contre...",
                image: "./images/illustrations/placeholder_q9.png", // Placeholder
                image_alt: "Description: Illustration symbolique montrant des mains bienveillantes protégeant des enfants ou un globe terrestre.",
                options: [
                    "Le soleil quand il fait chaud",
                    "Les légumes à la cantine",
                    "Toutes les formes de violence, de négligence ou d'exploitation",
                    "Les mauvaises notes"
                ],
                answer: 2,
                explanation: "C'est exact ! La Convention Internationale des Droits de l'Enfant insiste beaucoup sur la protection des enfants contre la violence physique ou mentale, l'abandon, la négligence, l'exploitation (comme le travail dangereux) et les abus."
            },
            {
                question: "Que peux-tu faire si tu penses que tes droits ne sont pas respectés ?",
                image: "./images/illustrations/placeholder_q10.png", // Placeholder
                image_alt: "Description: Illustration montrant des enfants ou des jeunes tenant des pancartes ou s'exprimant pour défendre leurs droits.",
                options: [
                    "Ne rien dire, c'est normal",
                    "En parler à un adulte de confiance (parent, professeur, famille...)",
                    "Crier très fort",
                    "Attendre d'avoir 18 ans"
                ],
                answer: 1,
                explanation: "Il est très important d'en parler ! Tu peux te confier à un adulte en qui tu as confiance. Il existe aussi des numéros de téléphone et des organisations qui peuvent t'aider et te conseiller."
            }
        ]
    },
    en: {
        title: "Quiz on the Rights of the Child",
        resultMessages: {
            perfect: "Excellent! You know the rights of the child very well!",
            good: "Well done! You have good knowledge of children's rights.",
            average: "Not bad! Keep learning about children's rights.",
            poor: "You can improve your knowledge. Feel free to explore the Convention!"
        },
        questions: [
            {
                question: "What is the Convention on the Rights of the Child (CRC)?",
                image: "./images/illustrations/q1_cide_monde.jpeg",
                image_alt: "Illustration: Diverse children around the globe",
                options: [
                    "A storybook about children around the world",
                    "An international agreement that protects the rights of all children",
                    "A popular video game",
                    "A song about friendship"
                ],
                answer: 1,
                explanation: "The CRC is like a magic shield recognized by almost all countries to protect the rights of every child, everywhere in the world!"
            },
            {
                question: "From what age does a child have rights according to the CRC?",
                image: "./images/illustrations/q2_adolescents.jpeg",
                image_alt: "Illustration: Group of diverse teenagers",
                options: [
                    "Only when they can talk",
                    "From age 6",
                    "From birth",
                    "When they go to school"
                ],
                answer: 2,
                explanation: "As soon as you are born, you have all the rights of the CRC, until you turn 18!"
            },
            {
                question: "What is the purpose of the CRC?",
                image: "./images/illustrations/q3_icones_droits.jpeg",
                image_alt: "Illustration: Icons representing different rights",
                options: [
                    "To give homework to children",
                    "To choose games during recess",
                    "To ensure adults respect children and help them grow up well",
                    "To organize birthday parties"
                ],
                answer: 2,
                explanation: "The CRC reminds adults (parents, teachers, governments...) that they must do everything possible to ensure children are safe, healthy, listened to, and can learn and play."
            },
            {
                question: "Has Algeria signed and promised to respect the CRC?",
                image: "./images/illustrations/q4_enfants_drapeau_algerie.svg",
                image_alt: "Illustration: Children holding the Algerian flag",
                options: [
                    "Yes",
                    "No",
                    "Only for children who go to school",
                    "I don't know"
                ],
                answer: 0,
                explanation: "Yes! Algeria, like the vast majority of countries in the world, has committed to respecting and implementing the rights of the CRC for all children living in its territory."
            },
            {
                question: "How many articles (rights) are there in the CRC?",
                image: "./images/illustrations/q5_document_signature.jpeg",
                image_alt: "Illustration: Official document with signature",
                options: [
                    "10",
                    "100",
                    "54",
                    "25"
                ],
                answer: 2,
                explanation: "There are 54 articles in the CRC! Each describes an important right for children, like the right to go to school, to be protected, to have a name..."
            },
            {
                question: "Is having a name and a nationality (being a citizen of a country) a right?",
                image: "./images/illustrations/q6_carte_identite.jpeg",
                image_alt: "Illustration: Stylized identity card",
                options: [
                    "No, it's not important",
                    "Yes, it's a fundamental right",
                    "Only if the parents want it",
                    "Only in some countries"
                ],
                answer: 1,
                explanation: "Yes! From birth, you have the right to be registered, to have a name, a nationality, and to know your parents. It's very important for your identity."
            },
            {
                question: "Is the right to go to school included in the CRC?",
                image: "./images/illustrations/placeholder_q7.png", // Placeholder
                image_alt: "Description: Illustration showing smiling children of different origins going to school with backpacks.",
                options: [
                    "No, school is just for learning to read",
                    "Yes, all children have the right to education",
                    "Only for boys",
                    "Only if the school is nearby"
                ],
                answer: 1,
                explanation: "Absolutely! The CRC states that all children have the right to go to school for free to learn, develop their talents, and understand the world."
            },
            {
                question: "Do you have the right to give your opinion on matters that concern you?",
                image: "./images/illustrations/placeholder_q8.png", // Placeholder
                image_alt: "Description: Illustration showing children or young people of different origins expressing their opinions (e.g., with speech bubbles).",
                options: [
                    "No, children should just listen to adults",
                    "Yes, but only if adults agree",
                    "Yes, your opinion matters and should be listened to by adults",
                    "Only when you grow up"
                ],
                answer: 2,
                explanation: "Yes! You have the right to freely express your opinion on subjects that affect you. Adults should listen to your opinion and take it seriously, according to your age and maturity."
            },
            {
                question: "The CRC says that children must be protected from...",
                image: "./images/illustrations/placeholder_q9.png", // Placeholder
                image_alt: "Description: Symbolic illustration showing caring hands protecting children or a globe.",
                options: [
                    "The sun when it's hot",
                    "Vegetables in the canteen",
                    "All forms of violence, neglect, or exploitation",
                    "Bad grades"
                ],
                answer: 2,
                explanation: "That's right! The CRC strongly emphasizes the protection of children from physical or mental violence, abandonment, neglect, exploitation (like dangerous work), and abuse."
            },
            {
                question: "What can you do if you think your rights are not being respected?",
                image: "./images/illustrations/placeholder_q10.png", // Placeholder
                image_alt: "Description: Illustration showing children or young people holding signs or speaking out to defend their rights.",
                options: [
                    "Say nothing, it's normal",
                    "Talk to a trusted adult (parent, teacher, family member...)",
                    "Shout very loudly",
                    "Wait until you are 18"
                ],
                answer: 1,
                explanation: "It's very important to talk about it! You can confide in an adult you trust. There are also phone numbers and organizations that can help and advise you."
            }
        ]
    },
    ar: {
        title: "اختبار حول حقوق الطفل",
        resultMessages: {
            perfect: "ممتاز! أنت تعرف حقوق الطفل جيدًا!",
            good: "أحسنت! لديك معرفة جيدة بحقوق الطفل.",
            average: "لا بأس! استمر في التعرف على حقوق الطفل.",
            poor: "يمكنك تحسين معرفتك. لا تتردد في استكشاف الاتفاقية!"
        },
        questions: [
            {
                question: "ما هي اتفاقية حقوق الطفل (CRC)؟",
                image: "./images/illustrations/q1_cide_monde.jpeg",
                image_alt: "توضيح: أطفال متنوعون حول العالم",
                options: [
                    "كتاب قصص عن أطفال العالم",
                    "اتفاق دولي يحمي حقوق جميع الأطفال",
                    "لعبة فيديو مشهورة",
                    "أغنية عن الصداقة"
                ],
                answer: 1,
                explanation: "اتفاقية حقوق الطفل مثل درع سحري معترف به من قبل جميع البلدان تقريبًا لحماية حقوق كل طفل، في كل مكان في العالم!"
            },
            {
                question: "ابتداءً من أي عمر يتمتع الطفل بحقوق وفقًا لاتفاقية حقوق الطفل؟",
                image: "./images/illustrations/q2_adolescents.jpeg",
                image_alt: "توضيح: مجموعة من المراهقين المتنوعين",
                options: [
                    "فقط عندما يستطيع الكلام",
                    "من سن 6 سنوات",
                    "منذ ولادته",
                    "عندما يذهب إلى المدرسة"
                ],
                answer: 2,
                explanation: "بمجرد أن تولد، لديك جميع حقوق اتفاقية حقوق الطفل، حتى تبلغ 18 عامًا!"
            },
            {
                question: "ما هو الغرض من اتفاقية حقوق الطفل؟",
                image: "./images/illustrations/q3_icones_droits.jpeg",
                image_alt: "توضيح: أيقونات تمثل حقوقًا مختلفة",
                options: [
                    "إعطاء واجبات منزلية للأطفال",
                    "اختيار الألعاب أثناء الاستراحة",
                    "ضمان احترام البالغين للأطفال ومساعدتهم على النمو بشكل جيد",
                    "تنظيم حفلات أعياد الميلاد"
                ],
                answer: 2,
                explanation: "تذكر اتفاقية حقوق الطفل البالغين (الآباء والمعلمين والحكومات ...) بأنه يجب عليهم فعل كل ما هو ممكن لضمان سلامة الأطفال وصحتهم والاستماع إليهم وتمكينهم من التعلم واللعب."
            },
            {
                question: "هل وقعت الجزائر ووعدت باحترام اتفاقية حقوق الطفل؟",
                image: "./images/illustrations/q4_enfants_drapeau_algerie.svg",
                image_alt: "توضيح: أطفال يحملون العلم الجزائري",
                options: [
                    "نعم",
                    "لا",
                    "فقط للأطفال الذين يذهبون إلى المدرسة",
                    "لا أعرف"
                ],
                answer: 0,
                explanation: "نعم! التزمت الجزائر، مثل الغالبية العظمى من دول العالم، باحترام وتطبيق حقوق اتفاقية حقوق الطفل لجميع الأطفال الذين يعيشون على أراضيها."
            },
            {
                question: "كم عدد المواد (الحقوق) الموجودة في اتفاقية حقوق الطفل؟",
                image: "./images/illustrations/q5_document_signature.jpeg",
                image_alt: "توضيح: وثيقة رسمية مع توقيع",
                options: [
                    "10",
                    "100",
                    "54",
                    "25"
                ],
                answer: 2,
                explanation: "هناك 54 مادة في اتفاقية حقوق الطفل! كل مادة تصف حقًا مهمًا للأطفال، مثل الحق في الذهاب إلى المدرسة، والحق في الحماية، والحق في الحصول على اسم ..."
            },
            {
                question: "هل الحصول على اسم وجنسية (كونك مواطنًا في بلد ما) حق؟",
                image: "./images/illustrations/q6_carte_identite.jpeg",
                image_alt: "توضيح: بطاقة هوية مبسطة",
                options: [
                    "لا، هذا ليس مهمًا",
                    "نعم، إنه حق أساسي",
                    "فقط إذا أراد الوالدان ذلك",
                    "فقط في بعض البلدان"
                ],
                answer: 1,
                explanation: "نعم! منذ ولادتك، لديك الحق في التسجيل، والحصول على اسم وجنسية، ومعرفة والديك. هذا مهم جدًا لهويتك."
            },
            {
                question: "هل الحق في الذهاب إلى المدرسة مدرج في اتفاقية حقوق الطفل؟",
                image: "./images/illustrations/placeholder_q7.png", // Placeholder
                image_alt: "وصف: رسم توضيحي يظهر أطفالًا مبتسمين من أصول مختلفة يذهبون إلى المدرسة حاملين حقائب الظهر.",
                options: [
                    "لا، المدرسة فقط لتعلم القراءة",
                    "نعم، لجميع الأطفال الحق في التعليم",
                    "فقط للأولاد",
                    "فقط إذا كانت المدرسة قريبة"
                ],
                answer: 1,
                explanation: "بالتأكيد! تنص اتفاقية حقوق الطفل على أن لجميع الأطفال الحق في الذهاب إلى المدرسة مجانًا للتعلم وتنمية مواهبهم وفهم العالم."
            },
            {
                question: "هل لديك الحق في إبداء رأيك في الأمور التي تهمك؟",
                image: "./images/illustrations/placeholder_q8.png", // Placeholder
                image_alt: "وصف: رسم توضيحي يظهر أطفالًا أو شبابًا من أصول مختلفة يعبرون عن آرائهم (على سبيل المثال، باستخدام فقاعات الكلام).",
                options: [
                    "لا، يجب على الأطفال فقط الاستماع إلى الكبار",
                    "نعم، ولكن فقط إذا وافق الكبار",
                    "نعم، رأيك مهم ويجب أن يستمع إليه الكبار",
                    "فقط عندما تكبر"
                ],
                answer: 2,
                explanation: "نعم! لديك الحق في التعبير عن رأيك بحرية في الموضوعات التي تؤثر عليك. يجب على البالغين الاستماع إلى رأيك وأخذه على محمل الجد، وفقًا لعمرك ونضجك."
            },
            {
                question: "تنص اتفاقية حقوق الطفل على وجوب حماية الأطفال من ...",
                image: "./images/illustrations/placeholder_q9.png", // Placeholder
                image_alt: "وصف: رسم توضيحي رمزي يظهر أياديًا حانية تحمي أطفالًا أو كرة أرضية.",
                options: [
                    "الشمس عندما يكون الجو حارًا",
                    "الخضروات في المقصف",
                    "جميع أشكال العنف أو الإهمال أو الاستغلال",
                    "الدرجات السيئة"
                ],
                answer: 2,
                explanation: "هذا صحيح! تشدد اتفاقية حقوق الطفل بشدة على حماية الأطفال من العنف الجسدي أو العقلي، والتخلي، والإهمال، والاستغلال (مثل العمل الخطير)، والإساءة."
            },
            {
                question: "ماذا يمكنك أن تفعل إذا كنت تعتقد أن حقوقك لا تُحترم؟",
                image: "./images/illustrations/placeholder_q10.png", // Placeholder
                image_alt: "وصف: رسم توضيحي يظهر أطفالًا أو شبابًا يحملون لافتات أو يتحدثون للدفاع عن حقوقهم.",
                options: [
                    "لا تقل شيئًا، هذا طبيعي",
                    "تحدث إلى شخص بالغ تثق به (أحد الوالدين، معلم، فرد من العائلة ...)",
                    "اصرخ بصوت عالٍ جدًا",
                    "انتظر حتى تبلغ 18 عامًا"
                ],
                answer: 1,
                explanation: "من المهم جدًا التحدث عن ذلك! يمكنك الوثوق بشخص بالغ تثق به. هناك أيضًا أرقام هواتف ومنظمات يمكنها مساعدتك وتقديم المشورة لك."
            }
        ]
    }
};

