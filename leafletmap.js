var map = L.map('map').setView([12.8797, 121.7740], 10);

//OpenStreetMap tilelayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Locations
const locations = [
    {
        position: [14.5995, 120.9842], //Manila, PH May 3, 1882
        info: ["<strong>Manila, Philippines (1882)</strong><br>" +
            "<b><i>May 3, 1882</i></b>" +
            "<li>Secret mission of Rizal where he was to observe European life, culture, languages, industries, and governments to prepare for liberating his people from Spanish oppression. " +
            "His departure was kept secret to evade Spanish authorities.</li>" +
            "<li>Only Paciano, Neneng and Lucia, Valenzuela family, and Pedro Paterno knew of his plan to go abroad.</li>" +
            "<li>He boarded the Salvadora using a passport of the name Jose Marcado, a cousin from Binan.</li>"
        ]
    },
    {
        position: [1.3521, 103.8198], //Singapore
        info: ["<strong>Singapore (1882)</strong><br>" +
            "<b><i>May 1882</i></b>" +
            "<li>On May 19, the Salvadora docked at Singapore (Rizal's first stop on his way to Spain).</li>" +
            "<li>He spent sightseeing the city including the Botanical Garden, Buddhist temples, and the monument of Sir Thomas Stanford Raffles, the founder of Singapore.</li>" +
            "<li>On May 11, Rizal transferred to another ship, Djemnah, a French steamer.</li>"
        ]
    },
    {
        position: [6.9271, 79.8612], //Sri Lanka
        info: ["<strong>Colombo, Sri Lanka</strong><br>" +
            "<b><i>May 18, 1882</i></b>" +
            "<li>Arrived on Colombo. He was enamored by scenic beauty and elegant buildings.</li>" +
            "<li>This journey was important for him to improve his knowledge of the French language while on board a French ship, Djemnah.</li>"
        ]
    },
    {
        position: [12.7906, 45.0176], //Aden, Yemen
        info: ["<strong>Aden, Yemen</strong><br>" +
            "<li>Hotter than Manila.</li>" +
            "<li>He was amused to see the camels as it was his first time seeing them.</li>"
        ]
    },
    {
        position: [30.70500, 32.34417], //Suez Canal, Egypt
        info: ["<strong>Suez Canal, Egypt (1882)</strong><br>" +
            "<b><i>June 2, 1882</i></b>" +
            "<li>En route through the Suez Canal, Rizal got off at Red Sea terminal and was amazed by the impressive moonlight scenery in Suez, which reminded him of Calamba and his family.</li>" +
            "<li>He was thrilled because it was his first trip through this canal which was built by Ferdinand de Lesseps.</li>" +
            "<li>He got engrossed with the multicultural people hearing them speak  babel of tongues.</li>"
        ]
    },
    {
        position: [40.8518, 14.2681], //Naples, Italy
        info: ["<strong>Naples, Italy</strong><br>" +
            "<b><i>June 11, 1882</i></b>" +
            "<li>Rizal visited Naples on his way to Spain. This was the first European ground he set his foot on. The place pleased him for its business activity, lively people, and panoramic beauty.</li>" +
            "<li>He was fascinated by the Mouth Vesuvius, the Castle of ST. Telmo and other historic sights.</li>"
        ]
    },
    {
        position: [43.3026, 5.3691], //Marseille, France
        info: ["<strong>Marseille, France</strong><br>" +
            "<b><i>June 1882</i></b>" +
            "<li>On <i>June 13</i>, Rizal arrived early in the morning and boarded at the Noalles Hotel.</li>" +
            "<li>He visited Chateau d'if, where Dantes, hero of The Count of Monte Cristo, was imprisoned.</li>" +
            "<li>On <i>June 15</i>, he left Marseilles for Barcelona in an express train.</li>"
        ]
    },
    {
        position: [41.3874, 2.1686], //Barcelona
        info: ["<strong>Barcelona, Spain (1882)</strong><br>" +
            "<b><i>June 16, 1882</i></b>" +
            "<li>Reached Barcelona on this day.</li>" +
            "<li>His first impression was unfavorable. He thought it was ugly, dirty with little inns and inhospitable residents, because he happened to stay at a dingy inn situated on an unimpressive narrow street in the town's most ugly side.</li>" +
            "<li>Later, he changed his impression and came to like the city. He found it great with an atmosphere of freedom and liberalism, its people hospitable, open-hearted, and courageous. He also enjoyed promenading Las Ramblas, the most famous street in Barcelona.</li><br>" +
            "<b><i>August 20, 1882</i></b>" +
            "<li>He wrote his first article abroad <i>“Amor Patrio”</i>. It was published in the Diarong Tagalog, a Manila newspaper edited by Basilio Teodoro.</li><br>" +
            "While Rizal was sojourning in Barcelona, he received sad news about the cholera across Manila and other provinces. Another sad news from the Philippines was the chatty letter of Chengoy recounting the unhappiness of Leonor Rivera, who was getting " +
            "thinner because of the absence of a loved one.<br>"
        ]
    },
    {
        position: [40.4165, -3.70256], //Madrid
        info: ["<strong>Madrid, Spain (1882)</strong><br>" +
            "On <b><i>November 3, 1882</i></b>, Rizal enrolled in Universidad Central de Madrid in two courses: Medicine and Philosophy and Letters. " +
            "He also studied painting and sculpture, learned French, German, and English, and practiced fencing and shooting. <br><br>" +
            "Rizal got into a romance with <i>Consuelo Ortiga y Perez</i>, daughter of Don Pablo. Being a lonely man in a foreign country, he was attracted by her beauty and vivacity, then later wrote " +
            "a poem for her on August 22, 1883, titled <i>A La Señorita C. O. y P.</i> However, he backed out before it could blossom into a serious affair.<br><br>" +
            "<b><i>December 31, 1882</i></b>" +
            "<li>Shortly after Rizal arrived in Madrid, he joined <i>Circulo Hispano-Filipino</i>, a society of Spaniards and Filipinos. Upon request, he wrote a poem titled <i>“Me Piden Versos”</i> which he declaimed during New Year’s Eve.</li>"
        ]
    },
    {
        position: [48.8575, 2.3514], //Paris
        info: ["<strong>Paris, France (1883)</strong><br>" +
        "Rizal was sojourning in Paris from June 17 to August 20, 1883. He was titillated by the attractive sights, such as the beautiful boulevards (Champs Elysses in particular), Opera House, Place de la Concorde, Arch of Triumph, Bois de Boulogne, Madelaine Church, Cathedral of Nortre Dame, Column of Vendome, Invalides, and Versailles. <br><br>" +    
        "<b><i>June 18, 1883</i></b>" +
        "<li>With Felipe Zamora and Cunanan, he visited the Leannec Hospital to observe how Dr. Nicaise treated his patients. He was stunned to see the " +
        "advanced facilities in the hospital.</li><br>" +
        "<b><i>June 19, 1883</i></b>" +
        "<li>He visited again Dr. Nicaise who showed the technique of operation. Later, he went to see dupuytren museum.</li><br>" +
        "<b><i>June 20, 1883</i></b>" +
        "<li>Rizal visited the Lariboisiere Hospital where Felix Pardo de Tavera was an extern. Here, he observed the examination of the different diseases of women.</li><br>" +
        "After departure for Spain, things turned from bad to worse in Calamba.<br>"
    ]
    },
    {
        position: [40.4165, -3.70256], //Back to Madrid
        info: ["<strong>Madrid, Spain (1883-1884)</strong><br>" +
        "<b><i>September 28, 1883</i></b>" +
        "<li>He enrolled at Universidad Central de Madrid for the second course in medicine.</li><br>" +
        "<b><i>October 1883</i></b>" +
        "<li>He came to know of the imprisonment, by the order of Sr. Vicente Barrantes, of the 14 rich innocent persons in Manila. The prisoners were kept in a humid prison cell. " +
        "Rizal was then indignant of this inhuman act.</li><br>" +
        "<b><i>January 2, 1884</i></b>" +
        "<li>At a gathering of friends at the house of Pedro A. Paterno, he proposed that a group of Filipinos should collaborate on a novel about the Philippines. "+
        "This became the embryo of his first novel Noli Me Tangere. </li><br>" +
        "<b><i>June 21, 1884</i></b>" +
        "<li>He finished the degree of Liciente in Medicine with the grade of aprobado.</li><br>" +
        "<b><i>July 1, 1884</i></b>" +
        "<li>Rizal explained the term Filibusterismo in the newspaper of Madrid El Progreso, calling the attention of Spanish authorities over the case of the future of Filipinos. He asked " +
        "for freedom of press and the right of representation of the Spanish Cortes.</li><br>" +
        "<b><i>November 20, 1884</i></b>" +
        "<li>Rizal witnessed the scene in Universidad Central de Madrid where the students and professors staged a strike against excommunication imposed by the bishop on the lecture " +
        "proclaiming the freedom of science and of the teacher.</li>"
    ]
    },
    {
        position: [48.8575, 2.3514], //Back to Paris, 1885-1886
        info: ["<strong>Paris, France (1885-1886)</strong><br>" +
        "After completing his studies in Madrid, Rizal went to Paris and Germany to specialize in ophthalmology. He chose this branch to cure his mother’s eye ailment.<br><br>" +
        "<b><i>November 1885</i></b>" +
        "<li>He lived in Paris, where he sojourned for about four months.</li>" +
        "<li>He worked as an assistant to Dr. Louis de Weckert, a leading French ophthalmologist, from November 1885 to February 1886.</li>" +
        "<li>Outside of his working hours, he relaxed by visiting his friends, such as the family of the Pardo de Taveras, Juan Luna, and Felix Resurreccion Hidalgo.</li>"
    ]
    },
    {
        position: [49.3988, 8.6724], //Heidelberg, Germany
        info: ["<strong>Heidelberg, Germany</strong><br>" +
        "After acquiring enough experience as an ophthalmologist in Dr. Weckert's clinic, Rizal left Paris on February 1, 1886 for Germany.<br><br>" +
        "<b><i>February 1886</i></b>" +
        "<li>On February 3, Rizal arrived in Heidelberg, a historic city in Germany. For a short time, he lived in a boarding house with some German law students before he transferred to a boarding house near the University of Heidelberg.</li>" +
        "<li>He worked at the University Eye Hospital under the direction of Dr. Otto Becker, a distinguished German ophthalmologist. He also attended the lectures of Dr. Becker and Prof. Wilhelm at the university.</li><br>" +
        "<b><i>April 22, 1886</i></b>" +
        "<li>He wrote the poem <i>“A Las Flores de Heidelberg”</i>  after feeling a sense of nostalgia for his parents and his country.</li>"
    ]
    },
    {
        position: [49.4723, 8.7578], //Wilhelmsfeld, Germany
        info: ["<strong>Wilhelmsfeld, Germany</strong><br>" +
        "<b><i>April to June 1886</i></b>" +
        "<li>After writing <i>“To The Flowers of Heidelberg,”</i> Rizal spent a three-month summer vacation at Wilhelmsfeld, a mountainous village near Heidelberg.</li>" +
        "<li>He stayed at the vicarage of Protestant pastor, Dr. Karl Ullmer, who became his good friend and admirer.</li>" +
        "<li>On June 25, his sojourn in Wilhelmsfeld ended and returned to Heidelberg.</li>"
    ]
    },
    {
        position: [51.3397, 12.3731], //Leipzig, Germany
        info: ["<strong>Leipzig, Germany</strong><br>" +
        "<b><i>August to October 1886</i></b>" +
        "<li>On August 9, three days after the fifth centenary celebration of the University of Heidelberg, Rizal left the city.</li>" +
        "<li>On August 14, he arrived in Leipzig, where he attended some lectures at the University of Leipzig on history and psychology. There, he befriended Professor Friedrich Ratzel, a famous German historian, and Dr. Hans Meyer, a German anthropologist.</li>" +
        "<li>Rizal translated Schiller’s <i>William Tell</i> from German into Tagalog so that Filipinos might know of the story about the champion of Swiss independence. Later, he also translated into Tagalog Hans Christian Andersen’s <i>Fairy Tales</i> for his nieces and nephews.</li>" +
        "<li>He stayed for two months because of the city’s low cost of living. Here, he corrected some chapters of his second novel.</li>" +
        "<li>He worked as a proof-reader for his knowledge of German, Spanish, and other European languages.</li>" +
        "<li>On October 29, he left Leipzig for Dresden.</li>"
    ]
    },
    {
        position: [51.0504, 13.7373], //Dresden, Germany
        info: ["<strong>Dresden, Germany</strong><br>" +
        "<b><i>October 30-31, 1886</i></b>" +
        "<li>He met Dr. Adolph B. Meyer, Director of the Anthropological and Ethnological Museum. He stayed only two days in the city.</li>" +
        "<li>In the morning of November 1, he left Dresden by train, reaching Berlin in the evening.</li>"
    ]
    },
    {
        position: [52.5200, 13.4050], //Berlin, Germany
        info: ["<strong>Berlin, Germany</strong><br>" +
        "Rizal’s journey in Berlin was to gain further knowledge in ophthalmology, to further his studies of sciences and languages, observe the economic had political conditions of the German nation, associate with famous German scientists and scholars, and to publish his novel Noli Me Tangere.<br><br>" +
        "<b><i>November 1, 1886</i></b>" +
        "<li>Rizal was enchanted by Berlin because of its scientific atmosphere and absence of race prejudice.</li>" +
        "<li>He met Dr. Feodor Jagor, author of Travels in the Philippines, a book that Rizal admired because of its keen observances in the Philippines setting.</li>" +
        "<li>Dr. Jagor introduced Rizal to Dr. Rudolf Virchow, a German anthropologist, and the latter’s son, Dr. Hans Virchow. Rizal became a member of the <i>Anthropological Society</i> of Berlin upon Dr. Jagor and Dr. Meyer’s recommendation.</li><br>" +
        "<b><i>Winter 1886</i></b>" +
        "<li>Rizal’s darkest winter as he lived in poverty because no money arrived from Calamba.</li>" +
        "<li>He starved and his health deteriorated due to lack of proper nourishment.</li><br>" +
        "<b><i>March 21, 1887</i></b>" +
        "<li>With the help of Maximo Viola, who gave him the necessary funds to publish the novel, Noli Me Tangere was published in Berlin.</li>" +
        "<li>With copies of his novel coming off the press, he sent one copy to Prof. Blumentritt. In a letter of his Austrian friend, he said it was "+
        "the first impartial and daring book to be written about the life of the Tagalogs. He opined that the friars and Spanish authorities would attack the book.</li>" +
        "<li>His reading of Harriet Beecher Stowe’s <i>Uncle Tom’s Cabin</i> inspired Rizal to prepare a novel that would depict the miseries of his people under the tyrannical rule of the Spaniards.</li>" +
        "<li>Noli Me Tangere means <i>Touch Me Not</i> in English. The words were taken from the Gospel of Saint Luke, signifying “do not touch me.”</li>"
    ]
    },
    {
        position: [50.5384, 14.1305], //Leitmeritz, Czech Republic
        info: ["<strong>Leitmeritz, Czech Republic</strong><br>" +
        "After the publication of his first novel, Rizal planned to visit the important places in Europe. Dr. Maximo Viola agreed to be his traveling companion. After clearing his debt to Viola, he was ready to see Europe before returning to Calamba.<br><br>" +
        "<b><i>May 11, 1887</i></b>" +
        "<li>Rizal and Viola left Berlin by train. They tarried for some time in Dresden, Germany, which coincided with the regional floral exposition.</li><br>" +
        "<b><i>May 13-16, 1887</i></b>" +
        "<li>Rizal and Viola arrived at the railroad station of Leitmeritz, who were warmly greeted by Prof. Blumentritt after receiving the wire the two sent.</li>" +
        "<li>For the first time, Rizal and Prof. Blumentritt, who came to know each other by correspondence, met in person.</li>" +
        "<li>During their visit, Rizal met a renowned scientist of Europe, Dr. Carlos Czepelak. He also got to know an eminent naturalist, Prof. Robert Klutschak.</li>" +
        "<li>Rizal and Viola stayed at the home of their host, Blumentritt, from May 13 until May 16.</li>"
    ]
    },
    {
        position: [50.0755, 14.4378], //Prague, Czech Republic
        info: ["<strong>Prague, Czech Republic</strong><br>" +
        "<b><i>May 1887</i></b>" +
        "<li>Rizal and Viola visited the tomb of Copernicus, the famous astronomer; the museum of natural history; the bacteriological laboratories; the famous cave where San Juan Nepomuceno, the Catholic saint, " +
        "was imprisoned; and the bridge from which this saint was hurled into the river.</li>" +
        "<li>Dr. Willkomm, professor of natural history in the University of Prague, accompanied them in the city.</li>" +
        "<li>After bidding farewell to Prof. Willkomm and his family, the two went to Brunn, which according to Viola, nothing much happened in the city.</li>"
    ]
    },
    {
        position: [48.2081, 16.3713], //Vienna, Austria
        info: ["<strong>Vienna, Austria-Hungary</strong><br>" +
        "<b><i>May 1887</i></b>" +
        "<li>On <i>May 20</i>, Rizal and Viola arrived at Vienna, capital of Austria-Hungary.</li>" +
        "<li>Famous in song and story, this city fascinated Rizal because of its beautiful buildings, religious images, haunting waltzes, and majestic charm.</li>" +
        "<li>The two met Norfenfals, one of the greatest novelists in Europe at the time. They also met two good friends of Blumentritt, Masner and Nordmann, Austrian scholars.</li>" +
        "<li>They visited the churches, museums, art galleries, theaters, and public parks.</li>" +
        "<li>On <i>May 24</i>, they left Vienna on a river boat to see the beautiful sights of the Danube River.</li>"
    ]
    },
    {
        position: [48.3069, 14.2859], //Lintz, Austria
        info: ["<strong>Lintz, Austria-Hungary</strong><br>" +
            "The river voyage ended in Lintz. Rizal and Viola traveled overland to Salzburg, and from there to Munich."
    ]
    },
    {
        position: [48.1351, 11.5820], //Munich, Germany
        info: ["<strong>Munich, Germany</strong><br>" +
            "Rizal and Viola sojourned for a short time to savor the famous Munich beer, reputed to be the best in Germany. "+
            "From Munich, they went to Nuremberg, where they saw the horrible torture machines used by the Inquisition."
    ]
    },
    {
        position: [48.4011, 9.9876], //Ulm, Germany
        info: ["<strong>Ulm, Germany</strong><br>" +
            "After Munich, Rizal and Viola visited Ulm. "+
            "The cathedral of the city was the largest and tallest in all Germany. They climb its many hundred steps."
    ]
    },
    {
        position: [47.6781, 8.6154], //Rheinfall, Switzerland
        info: ["<strong>Rheinfall, Switzerland</strong><br>" +
            "From Ulm, Rizal and Viola went to Stuttgart, Baden, and then Rheinfall (Cascade of the Rhine). Here, they saw the waterfall, which was the “most beautiful waterfall of Europe”."
    ]
    },
    {
        position: [46.2044, 6.1432], //Geneva, Switzerland
        info: ["<strong>Geneva, Switzerland</strong><br>" +
            "<b><i>June 1887</i></b>" +
            "<li>This Swiss city is one of the most beautiful cities in Europe, visited by world tourists every year. Aside from visiting the tourist spots, they went boating on the lake. Rizal showed his rowing prowess which he acquired during his boyhood days in Calamba.</li>" +
            "<li>On <i>June 19</i>, Rizal treated Viola to a blow-out as it was his 26th birthday.</li>" + 
            "<li>On <i>June 23</i>, they parted ways. Viola returned to Barcelona while Rizal continued to Italy. Rizal and Viola spent fifteen days in Geneva.</li><br>" +
            "While Rizal was happily touring, he received sad news from his friends in Madrid of the deplorable conditions of the primitive Igorots who were exhibited in the Exposition of the Philippines. Some of whom died, and the scanty clothing and crude weapons were objects " +
            "of mockery and laughter by the Spanish people and press."
    ]
    },
    {
        position: [41.8719, 12.56742], //Italy
        info: ["<strong>Italy</strong><br>" +
            "From Geneva, Rizal went to Italy. He visited Turin, Milan, Venice, and Florence.<br><br>" +
            "<b><i>June 27, 1887</i></b>" +
            "<li>He reached Rome, the Eternal City and also called the City of the Caesars.</li>" +
            "<li>He was thrilled by the sights and memories of the city.</li>" 
    ]
    },
    {
        position: [41.9029, 12.4534], //Vatican
        info: ["<strong>Vatican</strong><br>" +
            "<b><i>June 29, 1887</i></b>" +
            "<li>Rizal visited the Vatican for the first time during the Feast Day of St. Peter and St. Paul. " +
            "He was deeply impressed by the magnificent endifices, particularly St. Peter’s Church and the vast St. Peter’s Square.</li>"
    ]
    },
    {
        position: [14.5995, 120.9842], //Manila, PH May 3, 1882
        info: ["<strong>Manila, Philippines (1887)</strong><br>" +
            "<b><i>August 5, 1887</i></b>" +
            "<li>Near midnight, the haiphong (a steamer) arrived in Manila. Rizal went ashore with a happy heart for stepping again in the soils of his native land.</li>"
        ]
    },
    {
        position: [14.2127, 121.1639], //Calamba Laguna
        info: ["<strong>Calamba, Laguna, Philippines</strong><br>" +
            "<i>On August 8, 1887</i>, Rizal returned to his hometown <i>Calamba</i>, where his family warmly welcomed him but expressed concern for his safety. " +
            "Upon his return, Rizal established a medical clinic with his first patient being his mother <i>Teodora</i>, who was suffering from cataracts. His reputation quickly rose, earning him the nickname <i>“Dr. Uliman”</i>.<br><br>" +
            "While Rizal was peacefully living in Calamba, his enemies plotted against him, claiming that his novel <i>Noli</i> contained subversive ideas. A few weeks after his arrival, he was summoned by Governor General Emilio Terrero, where Rizal denied " +
            "the accusations. Governor General Terrero read the novel himself and found no issues with it. However, due to the influence of Rizal's enemies, particularly the friars and Dominicans, his novel was ultimately banned.<br><br>" +
            "<b><i>December 28, 1887</i></b>" +
            "<li>The archbishop of Manila issued an order banning the possession and reading of Jose Rizal’s novel.</li><br>" +
            "<b><i>December 30, 1887</i></b>" +
            "<li>Influenced by certain facts in the Noli, Governor General Terrero ordered an investigation of the friar estates to remedy iniquities present in connection with land taxes and tenant relations.</li>" +
            "<li>One of the friar estates affected was Calamba Hacienda which the Dominican Order owned since 1883.</li><br>" +
            "<b><i>January 8, 1888</i></b>" +
            "<li>After thorough investigation, Rizal wrote down his findings which the tenants and three officials of the hacienda signed.</li>" +
            "<li>Rizal’s exposure of the deplorable conditions of tenancy in Calamba further infuriated his enemies. The friars exerted pressure on Malacañan Palace to eliminate him.</li><br>" +
            "Rizal was advised to leave for his own good."
        ]
    },
    {
        position: [22.3193, 114.1694], //Hong Kong
        info: ["<strong>Hong Kong</strong><br>" +
            "He was pressured to leave the country to avoid persecution. He left the country for 2 reasons: " +
            "to not jeopardize the lives of his family and friends, and " +
            "to better fight for his country by writing in another land where he's not hindered to write.<br><br>" +
            "<b><i>February 1888</i></b>" +
            "<li>On <i>February 3</i>, Rizal left for Hong Kong after staying for six months in Calamba. He was sick and sad upon his departure.</li>" +
            "<li>On <i>February 8</i>, he arrived in Hong Kong. </li>" +
            "<li>On <i>February 16</i>, he wrote a letter to Blumentritt, containing how pleased he was now that he could write and freely express his thoughts without fear and censorship from the chief.</li><br>" +
            "Here, Rizal stayed at the Victoria Hotel, where he was welcomed by the Filipino residents including Jose Maria Basa, Balbino Mauricio, and Manuel Yriarte (son of Francisco Yriarte, alcalde mayor of Laguna).<br><br>" +
            "Jose Sainz de Varanda, former secretary of Governor General Terrero, spied Rizal’s movement in Hong Kong. It’s believed he was commissioned by Spanish authorities to spy on Rizal."
        ]
    },
    {
        position: [22.1987, 113.5439], //Macao
        info: ["<strong>Macao</strong><br>" +
            "<b><i>February 18, 1888</i></b>" +
            "<li>Rizal, accompanied by Basa, boarded the ferry steamer Kiu-Kiang for Macao,  where he was surprised to see a familiar face among the passengers. It was Sainz de Varanda.</li>" +
            "<li>He wrote in his diary that Macao was “small, low, and gloomy. There are many junks, sampans, but few steamers. It looks sad and is almost dead.”</li><br>" +
            "Rizal stayed sojourned in Macao for two days, where he visited the theater, casino, cathedral and churches, pagodas, botanical garden, and bazaars. He also saw the famous Grotto of Camoens, Portugal’s national poet.<br><br>" +
            "<b><i>February 19, 1888</i></b>" +
            "<li>In the evening, he witnessed a Catholic procession, in which the devotees were dressed in blue and purple dresses and were carrying unlighted candles.</li><br>" +
            "<b><i>February 20, 1888</i></b>" +
            "<li>Rizal and Basa returned to Hong kong.</li>"
        ]
    },
    {
        position: [35.4437, 139.6380], //Yokohama, Japan
        info: ["<strong>Yokohama, Japan</strong><br>" +
            "One of the happiest interludes in Rizal’s life was his journey in the Land of Cherry Blossoms for 45 days.<br><br>" +
            "<b><i>February 22, 1888</i></b>" +
            "<li>Rizal left Hong Kong on board the Oceanic, an American steamer. His next destination was Japan.</li><br>" +
            "<b><i>February 28, 1888</i></b>" +
            "<li>In the early morning of Tuesday, Rizal arrived in Yokohama.  He registered at the Grand Hotel before proceeding to Tokyo the next day.</li>"
        ]
    },
    {
        position: [35.6764, 139.6500], //Tokyo, Japan
        info: ["<strong>Tokyo, Japan</strong><br>" +
            "<b><i>March, 1888</i></b>" +
            "<br>Rizal was impressed by Tokyo, noting in a letter to Prof. Blumentritt that it was more expensive than Paris, with large, cyclopean walls and wide streets. However, he was disturbed by the use of rickshaws pulled by men, feeling disgusted at the sight of humans working like horses.<br><br>" +
            "Upon arriving in Tokyo, Rizal was approached by Juan Perez Caballero, secretary of the Spanish Legation, who invited him to stay at the legation. While Rizal recognized this was intended to monitor him, he accepted the invitation to save on living expenses and because he had nothing to hide from the Spanish authorities.<br><br>" +
            "On his first day in Tokyo, Rizal felt embarrassed by his inability to speak Japanese, struggling to communicate while shopping and facing laughter from children. Few locals spoke English, leading some to mistakenly think he was a Europeanized Japanese. To avoid further embarrassment, he decided to learn Japanese and, being a natural linguist, mastered it within days. He also studied kabuki, arts, music, and judo.<br><br>" +
            "Rizal found love in the heart of Japan with Seiko Usui, a woman he fondly called <i>O-Sei-San</i>. Their romance blossomed during his stay, fueled by shared passions for art and culture. They explored Japan together, conversing in English and French, and O-Sei-San even helped Rizal learn Japanese. However, Rizal's commitment to liberating the Philippines ultimately led him to leave Japan, breaking O-Sei-San's heart.<br><br>" +
            "<b><i>April 13, 1888</i></b>" +
            "<li>Rizal boarded the Belgic, an English steamer, at Yokohama, bound for the United States.</li>"
        ]
    },
    {
        position: [37.7749, -122.4194], //San Francisco, California
        info: ["<strong>San Francisco, California</strong><br>" +
            "Upon his arrival, he was struck by the racial prejudice he observed, witnessing the discriminatory treatment of Chinese and Black individuals by white Americans.<br><br>" +
            "<b><i>April 28, 1888</i></b>" +
            "<li>The steamer Belgic docked at San Francisco on Saturday morning.</li>" +
            "<li>All passengers were denied landing as American authorities quarantined the ship, claiming it had come from a cholera-affected area. Rizal, knowing there was no such epidemic in the Far East, soon realized the quarantine was politically motivated.</li><br>" +
            "<b><i>May 4-6, 1888</i></b>" +
            "<li>On May 4, Rizal was permitted to go ashore. He registered at Palace Hotel.</li>" +
            "<li>He stayed in San Francisco for two days, until May 6, 1888.</li>"
        ]
    },
    {
        position: [37.8044, -122.2712], //Oakland, USA
        info: ["<strong>Oakland, California</strong><br>" +
            "<b><i>May 6, 1888</i></b>" +
            "<li>Sunday, 4:30 P.M., Rizal left San Francisco for Oakland, nine miles across San Francisco Bay, by ferry boat.</li><br>" +
            "<b><i>May 7-13, 1888</i></b>" +
            "<li>Rizal's diary entries were rich with vivid descriptions of the landscape, from the scenic fields near Ogden to the snow-capped mountains and the beauty of Salt Lake.</li>" +
            "<li>His encounters with Mormon boys in Farmington, diverse wildlife, and cultural details—like women serving at the table—reflect his curiosity and appreciation for the region.</li><br>" +
            "<b><i>May 13, 1888</i></b>" +
            "<li>On Sunday morning, Rizal reached New York, thus ending his trip across the American continent.</li>"
        ]
    },
    {
        position: [40.7128, -74.0060], //New York, USA
        info: ["<strong>New York, USA</strong><br>" +
            "<b><i>May 13-16, 1888</i></b>" +
            "<li>He stayed for three days in this city, which he called the “Big Town”. He visited the scenic and historic places, got awed and inspired by the memorial to George Washington. He left on May 16 for Liverpool, " +
            "on board the <i>City of Rome</i> steamer. He saw the colossal Statue of Liberty as the ship steamed out of New York Harbor.</li>" +
            "<li>Rizal met with prominent figures, including the renowned American poet, Walt Whitman.</li><br>" +
            "Rizal had good and bad impressions of the United States. He observed American society, its strengths, and weaknesses. He was impressed by the country's technological advancements and its democratic ideals but also noted inequalities and social issues. " +
            "According to him, <i>“America is the land par excellence of freedom but only for the whites.”</i>"
        ]
    },
    {
        position: [53.4084, -2.9916], //Liverpool, England
        info: ["<strong>Liverpool, England</strong><br>" +
            "In his voyage from New York to Liverpool aboard the <i>City of Rome</i>, he made many friends from various nationalities due to his approachable personality and linguistic skills.<br><br>" +
            "<b><i>May 24, 1888</i></b>" +
            "<li>Arrived at Liverpool on this day. He stayed a day in this port city.</li>" +
            "<li>According to him, Liverpool was a large and beautiful city, with its renowned port deserving of its great reputation. The entrance was impressive, and the customhouse was quite remarkable.</li><br>" +
            "<b><i>May 24, 1888</i></b>" +
            "<li>A day after docking at Liverpool, Rizal went to London.</li>"
        ]
    },
    {
        position: [51.5072, -0.1276], //London, England
        info: ["<strong>London, England</strong><br>" +
            "Rizal's stay in London from <i>May 1888 to March 1889</i> was marked by scholarly achievements, personal experiences, and the unfolding political developments concerning the Philippines. During this period, he annotated Morga's <i>Sucesos de las Islas Filipinas</i>, contributed to political movements, and corresponded with fellow reformists.<br><br>" +
            "His London journey also saw him briefly caught in a romantic relationship with <i>Gertrude Beckett</i>, which he ultimately ended due to his sense of duty and mission.<br><br>" +
            "<b>Rizal was troubled by reports of ongoing injustices in the Philippines, particularly:</b><br>" +
            "<li>Persecution of Filipino patriots who signed the Anti-Friar Petition of 1888.</li>" +
            "<li>The harsh treatment of Calamba tenants, including Rizal's family, for petitioning agrarian reforms.</li>" +
            "<li>Attacks on Rizal by Spanish officials like Senators Salamanca and Vida.</li>" +
            "<li>The exile of Saturnina’s husband without due process of law and the imprisonment of Laureano Viado, a friend of Rizal, for having a copy of Noli.</li><br>" +
            "<b><i>July 18, 1888</i></b>" +
            "<li>One good news that cheered Rizal was Rev. Vicente Garcia’s defense of the Noli against the attack of the friars. He wrote a defense of the Noli under the penname Justo Desiderio Magalang, which was published in Singapore as an appendix to a pamphlet.</li><br>" +
            "<b><i>September-December 1888</i></b>" +
            "<li>On September, he visited Paris for a week in order to search for more historical materials in the Bibliotheque Nationale.</li>" +
            "<li>On December 11, Rizal traveled to Spain, where he met with reform leaders <i>Marcelo H. del Pilar</i> and <i>Mariano Ponce</i>. He also learned about the formation of the <i>Asociación La Solidaridad</i> in Barcelona, a key political group advocating for reforms in the Philippines, inaugurated on December 31. Rizal was named the honorary president of the association.</li><br>" +
            "<b><i>March 19, 1889</i></b>" +
            "<li>Rizal bade farewell to the Beckett family and left London for Paris.</li>"
        ]
    },
    {
        position: [48.8575, 2.3514], //Back to Paris, 1889
        info: ["<strong>Paris, France (1889)</strong><br>" +
        "Spring 1889 in Paris was lively and vibrant due to the Universal Exposition. Rizal, arriving from London, became immersed in the bustling and festive atmosphere of the city.<br><br>" +
        "<b><i>March 1889</i></b>" +
        "<li>It was difficult to find living quarters because of the approaching Universal Exposition, which was scheduled to open on May 6, 1889.</li>" +
        "<li>For a short time, Rizal lived in the house of his friend, Valentin Ventura, where he polished his annotated edition of Morga’s book.</li><br>" +
        "<b><i>May 6, 1889</i></b>" +
        "<li>Rizal was fascinated by the Universal Exposition, with the Eiffel Tower as the greatest attraction. It was built by Alexander Eiffel.</li>" +
        "<li>In their sightseeing, Rizal and the members of the Kidlat Club (founded by Rizal on March 19, 1889), were amazed to see the Buffalo Bull which featured the American Indians. This replaced the name Kidlat Club with Indios Bravos after watching the show.</li><br>" +
        "During the 1889 Universal Exposition in Paris, Rizal founded the secretive Sociedad R.D.L.M. (R.D.L.M. Society), a group often overlooked by biographers. Its role in the reform movement remains unclear, with only two letters—Rizal's letter to Jose Maria Basa (Sept. 21, 1889) and to Marcelo H. del Pilar (Nov. 4, 1889)—mentioning the society and its clandestine activities.<br><br>" +
        "<b><i>1890</i></b>" +
        "<li>Rizal’s annotated edition of Morga’s book was published. He dedicated it to the Filipino people so that they would know their glorious past.</li>" +
        "<li>Rizal intended to create a Filipino college in Hong Kong with the goal of educating young men from respectable families and with financial resources to prepare them to meet the needs of contemporary society. Unfortunately, this plan was never realized.</li>" +
        "<li>On January 28, he left Paris for Brussels.</li>"
    ]
    },
    {
        position: [50.8477, 4.3572], //Brussels, Belgium
        info: ["<strong>Brussels, Belgium (1890)</strong><br>" +
            "Rizal left Paris for two main reasons: the high cost of living due to the Universal Exposition and the distractions of Parisian social life, which hindered his literary works, mainly his progress on <i>El Filibusterismo</i>. While there, he briefly became involved with <b>Suzanne Jacoby<b>, but like his previous relationships, it ended quickly as he refused to engage in a deceptive romance.<br><br>" +
            "Rizal remained active in the Filipino reform movement, writing articles to <i>La Solidaridad</i> and advocating for Philippine reforms. He also championed the Filipinization of the Tagalog language, proposing the use of the native letters <i>k</i> and <i>w</i> instead of Spanish <i>c</i> and <i>o</i>. For example, he suggested writing <i>salakot</i> instead of <i>salacot</i> and <i>araw</i> instead of <i>arao</i>.<br><br>" +
            "<b><i>April 15, 1890</i></b>" +
            "<li>His article <i>Sobre la Nueva Ortografía de la Lengua Tagala (The New Orthography of the Tagalog Language)</i> was published in La Solidaridad, introducing new rules for Tagalog spelling and crediting Dr. Trinidad H. Pardo de Tavera for the adoption of the new orthography.</li><br>" +
            "<b><i>May 28, 1890</i></b>" +
            "<li>Rizal wrote to Marcelo H. del Pilar, urging Filipinos in Madrid to focus on their mission for independence rather than gambling. This was after hearing complaints from Juan Luna and Valentin Ventura about Filipinos tarnishing their nation's reputation.</li><br>" +
            "Bad news reached Rizal once again. The ongoing crisis in Calamba, where his family's land was being unjustly seized by the Spanish, troubled Rizal deeply. He was anxious and had nightmares, fearing for his family's well-being. He had susperstition that he would die early, but he wanted to complete <i>El Filibusterismo</i> before his death.<br><br>" +
            "News of his family's plight made him consider returning to the Philippines, but his friends warned him of the dangers awaiting him at home. His decision was changed by a letter from his brother Paciano, informing him that their case against the Dominicans had been lost but was being appealed in Spain, requiring legal representation in Madrid.<br><br>" +
            "<b><i>July 1890</i></b>" +
            "<li>Toward the end of July, Rizal left for Madrid.</li>"
        ]
    },
    {
        position: [40.4165, -3.70256], //Back to Madrid, 1890
        info: ["<strong>Madrid, Spain (1890-1891)</strong><br>" +
            "<b><i>Early August 1890</i></b>" +
            "<li>Rizal arrived in Madrid and sought support from the <b>Asociación Hispano-Filipina</b>, Filipino community, and liberal Spanish newspapers like <i>La Justicia, El Globo, La República,</i> and <i>El Resumen</i> to fight for justice for the Calamba tenants, including his family. He collaborated with M.H. del Pilar and Dr. Dominador Gomez to protest abuses by Governor Weyler and the Dominican Order.</li><br>" +
            "<b><i>August 19, 1890</i></b>" +
            "<li>Rizal mourned the death of his close friend Jose Ma. Panganiban, a key figure in the Propaganda Movement, who passed away in Barcelona after a prolonged illness. Rizal deeply grieved for his <i>Bicol hero.</i></li><br>" +
            "<b><i>Late August, 1890</i></b>" +
            "<li>Rizal and Antonio Luna nearly fought a duel over a dispute regarding Nellie Boustead. Luna, intoxicated and jealous, insulted her which prompted Rizal to challenge him. The Filipino community, including Marcelo H. del Pilar, intervened and urged them to reconcile. Luna, after sobering up, apologized, and the two resumed their friendship.</li><br>" +
            "<b><i>December 1890</i></b>" +
            "<li>Rizal's emotional turmoil deepened when Leonor Rivera, his long-time love, informed him of her upcoming marriage to another man, devastating him for her betrayal and after he lost a locket with her picture earlier in the year.</li><br>" +
            "<b><i>Late December 1890 - February 1891</i></b>" +
            "<li>A rivalry arose between Rizal and Marcelo H. del Pilar over leadership in the Propaganda Movement. Their differing approaches led to a clash in editorial policies, but Rizal ultimately abdicated leadership, unwilling to lead a divided group.</li>"
        ]
    },
    {
        position: [43.4832, -1.5586], //Biarritz, France
        info: ["<strong>Biarritz, France</strong><br>" +
            "<b><i>February 1891</i></b>" +
            "<li>Seeking solace after disappointments in Madrid, Rizal visited Biarritz and stayed with the wealthy Boustead family at Villa Eliada.</li>" +
            "<li>He became romantically involved with <b>Nellie Boustead</b>, but their relationship ended because Rizal refused to convert to <i>Protestantism</i> as Nellie demanded and Nellie’s mother disapproved of him as a son-in-law.</li>" +
            "<li>Despite the romantic distractions, Rizal continued working on <i>El Filibusterismo</i>, finding inspiration in the peaceful surroundings of Biarritz.</li><br>" +
            "<b><i>March 29, 1891</i></b>" +
            "<li>Rizal completed the final chapter of <i>El Filibusterismo</i>, finishing the novel he began in Calamba in 1887.</li><br>" +
            "<b><i>March 30, 1891</i></b>" +
            "<li>Rizal bade farewell to the Boustead family and left Biarritz, traveling by train to Paris.</li>"
        ]
    },
    {
        position: [50.8477, 4.3572], //Back to Brussels, 1891
        info: ["<strong>Brussels, Belgium (1891)</strong><br>" +
            "<b><i>April 1891</i></b>" +
            "<li>By the middle of April and after his short trip to Paris, Rizal was back in Brussels.</li>" +
            "<li>Here, Rizal worked day by day revising the finished manuscript of <i>El Filibusterismo</i> and readied it for printing.</li><br>" +
            "<b><i>May 39, 1891</i></b>" +
            "<li>The revision for his second novel was mostly completed on this day.</li><br>" +
            "<b><i>July 5, 1891</i></b>" +
            "<li>He left Brussels for Ghent.</li>"
        ]
    },
    {
        position: [51.0500, 3.7304], //Ghent, Belgium
        info: ["<strong>Ghent, Belgium (1891)</strong><br>" +
            "Rizal moved to Ghent for two reasons: the cheaper printing costs and to distance himself from Suzanne Jacoby. He also faced financial difficulties as he hadn’t received his pension from the Philippines for three months, living modestly and eating frugally to save for the publication of El Filibusterismo.<br><br>" +
            "<b><i>July 1891</i></b>" +
            "<li>Shortly after his arrival in Ghent, Rizal began searching for a printing shop in Ghent that would offer the lowest price for publishing <i>El Filibusterismo</i>.</li>" +
            "<li>After months of effort, Rizal found <i>F. Meyer-Van Loo Press</i> to print his book on an installment basis.</li><br>" +
            "<b><i>August 6, 1891</i></b>" +
            "<li>Printing was temporarily halted due to a lack of funds. In despair, Rizal almost burned the manuscript, as he had with <i>Noli Me Tangere</i>.</li>" +
            "<li>However, Valentin Ventura, upon hearing Rizal’s predicament, sent financial aid needed to continue the printing.</li><br>" +
            "<b><i>September 18, 1891</i></b>" +
            "<li><i>El Filibusterismo</i> came off the press.</li>" +
            "<li>Rizal sent two copies to Hong Kong (one for Jose Maria Basa and one for Sixto Lopez), donated the original manuscript to Ventura, and sent copies to other friends.</li>" +
            "<li>He dedicated the book to the <b>GomBurZa</b>.</li><br>" +
            "<b><i>October 18, 1891</i></b>" +
            "<li>Rizal boarded the steamer <i>Melbourne</i> in Marseille bound for Hong Kong.</li>"
        ]
    },
    {
        position: [22.3193, 114.1694], //Back to Hong Kong, 1891-92
        info: ["<strong>Hong Kong (1891-1892)</strong><br>" +
            "After publishing <i>El Filibusterismo</i>, Rizal left Europe due to political conflicts with M.H. del Pilar and other Filipinos in Spain, also seeking to be closer to his beloved Philippines and family. During the voyage to Hong Kong, he began working on an untitled third novel, which he never completed.<br><br>" +
            "<b><i>November 20, 1891</i></b>" +
            "<li>Rizal arrived in Hong Kong and was welcomed by Jose Ma. Basa and the Filipino community. He set up a medical clinic at No. 5 D’ Aguilar Street and settled at No. 2 Rednaxela Terrace.</li><br>" +
            "<b><i>December 1891</i></b>" +
            "<li>On December 1, he wrote to his parents asking for permission to return home.</li>" +
            "<li>Before Christmas, Rizal was overjoyed by the arrival of his father, brother, and brother-in-law, followed shortly by his mother and sisters. His mother, 65 and nearly blind, had suffered under Spanish oppression but was eventually freed by a compassionate governor.</li><br>" +
            "In Hong Kong, Rizal established a successful practice in ophthalmology, treating a diverse clientele, including British, Chinese, and Americans. He restored his mother's sight through surgery and treated various health conditions, including the influenza epidemic of 1892.<br><br>" +
            "<b><i>March 7, 1892</i></b>" +
            "<li>Rizal traveled to Sandakan to negotiate with the British authorities for the establishment of a Filipino colony. His mission was successful, and he returned to Hong Kong by April 20, 1892.</li><br>" +
            "<b><i>May 1892</i></b>" +
            "<li>Motivated by a desire to discuss his colonization project, establish Liga Filipina, and refute accusations of cowardice, Rizal decided to return to Manila.</li>" +
            "<li>He sought to revive the Propaganda Movement and defend his commitment to Filipino independence.</li><br>" +
            "<b><i>June 21, 1892</i></b>" +
            "<li>Rizal, accompanied by his sister Lucia, left Hong Kong for Manila, carrying a special passport issued by the Spanish consul-general.</li>" +
            "<li>As they departed, the consul sent a cable to Governor Despujol indicating Rizal’s arrival in Manila. A secret case was filed against him for <I>anti-religious and anti-patriotic agitation.</i></li>"
        ]
    },
    {
        position: [14.5995, 120.9842], //Manila, PH 1892
        info: ["<strong>Manila, Philippines (1892)</strong><br>" +
            "<b><i>June 26, 1892</i></b>" +
            "<li>Rizal arrived in Manila from Hong Kong aboard the Don Juan. He visited Malacañang Palace to request an audience with the Spanish Governor-General.</li><br>" +
            "<b><i>July 6, 1892</i></b>" +
            "<li>Rizal returned to Malacañang for further interviews with Governor-General Despujol. During this meeting, Despujol presented leaflets titled <i>Pobres Frailes (Poor Friars)</i>, allegedly found in Lucia's belongings. Rizal denied any involvement, but despite his insistence on an investigation, he was arrested and taken to Fort Santiago.</li><br>" +
            "<b><i>July 7, 1892</i></b>" +
            "<li>Governor-General Despujol issued a decree deporting Rizal to Dapitan, which was published in the newspapers.</li><br>" +
            "<b><i>July 15, 1892</i></b>" +
            "<li>Rizal was escorted to the steamer <i>Cebu</i> under heavy guard, departing for Dapitan, where they arrived on the evening of July 17, 1892.</li>"
        ]
    },
    {
        position: [8.6253, 123.3946], //Dapitan, PH
        info: ["<strong>Dapitan, Zamboanga del Norte, Philippines</strong><br>" +
            "<b><i>July 17, 1892 - July 31, 1896</i></b>" +
            "<li>Rizal was exiled in Dapitan for four years. He lived a quiet, disciplined life, managing a small farm, teaching local boys, and practicing medicine. In a letter to Ferdinand Blumentritt on <i>December 19, 1893</i>, he described his daily routine of farming, teaching, and treating patients. He also enjoyed a peaceful life with his family.</li><br>" +
            "<b><i>Early 1896</i></b>" +
            "<li>Rizal became fluent in Bisayan, Subanun, and Malay. By the end of his exile, he spoke 22 languages, including <i>Tagalog, Spanish, Portuguese, English,</i> and <i>Arabic</i>.</li><br>" +
            "<b><i>March 1896</i></b>" +
            "<li>By early 1896, Rizal was overjoyed as Josephine was pregnant.</li>" +
            "<li>However, in March 1896, after Rizal frightened her with a practical joke, she went into premature labor. Their baby boy, born at eight months, was weak and struggling to breathe. Rizal baptized him <i>Francisco</i>, after his father, and did everything he could to save him, but the child passed away just three hours later.</li><br>" +
            "<b><i>July 31, 1896</i></b>" +
            "<li> On the morning of July 31, his days in Dapitan came to an end. Rizal prepared to leave Dapitan. He packed his belongings and sold his property, mostly to local friends, before boarding the <i>España</i> to return to Manila.</li>"
        ]
    },
    {
        position: [14.5188, 120.7580], //Manila Bay, PH
        info: ["<strong>Manila Bay, Philippines</strong><br>" +
            "No longer an exile, Rizal had a pleasant trip from Dapitan to Manila, with stopovers in Dumaguete, Cebu, Iloilo, Capiz, and Romblon.<br><br>" +
            "<b><i>August 6, 1896</i></b>" +
            "<li>The <i>España</i> arrived on the morning of August 6, 1896, but Rizal missed the mail ship to Spain, which had already left the previous day.</li>" +
            "<li>He was transferred to the Spanish cruiser <i>Castilla</i> by order of Governor General Ramon Blanco.</li>" +
            "<li>Though not officially a prisoner, he was treated as a detained guest. Rizal remained aboard the <i>Castilla</i> under arrest for 27 days, from August 6 to September 2, 1896.</li><br>" +
            "<b><i>August 30, 1896</i></b>" +
            "<li>Revolutionaries led by Andres Bonifacio and Jacinto attacked San Juan near Manila, which concerned Rizal for two reasons: 1) he thought it was premature and would result in heavy casualties, and 2) it would provoke severe Spanish retaliation against Filipino patriots.</li><br>" +
            "<b><i>September 2, 1896</i></b>" +
            "<li>Rizal was transferred to the steamer <i>Isla de Panay</i> which was sailing for Barcelona, Spain. The next morning, September 3, the steamer left Manila Bay. This would be Rizal’s last trip to Spain.</li>"
        ]
    },
    {
        position: [1.3521, 103.8198], //Back to Singapore, 1896
        info: ["<strong>Singapore (1896)</strong><br>" +
            "<b><i>September 7, 1896</i></b>" +
            "<li>The <i>Isla de Panay</i> reached Singapore on this day. Don Pedro advised Rizal to stay behind in Singapore and take advantage of the protection of British law. Rizal, however, did not heed his advice.</li>" +
            "<li>Other Filipino residents on board the steamer urged Rizal to stay in Singapore too, but Rizal ignored their appeal as he did not want to break his word of honor to Governor General Blanco.</li>" +
            "<li>Without knowing, this would seal Rizal’s doom for Governor General Blanco was secretly conspiring with the Ministers of War and the Colonies for his destruction.</li><br>" +
            "<b><i>September 8, 1896</i></b>" +
            "<li>The steamer <i>Isla de Panay</i> left Singapore.</li>"
        ]
    },
    {
        position: [30.70500, 32.34417], //Back to Suez Canal (1896)
        info: ["<strong>Suez Canal, Egypt (1896)</strong><br>" +
            "<b><i>September 28, 1896</i></b>" +
            "<li>A day after departing Port Said, Rizal was informed by a fellow passenger that Governor General Blanco had ordered his arrest and transfer to Ceuta prison. Shocked, Rizal realized he had been deceived by the Spanish authorities.</li>"
        ]
    },
    {
        position: [41.3874, 2.1686], //Barcelona (1896)
        info: ["<strong>Barcelona, Spain (1896)</strong><br>" +
            "<b><i>September 30, 1896</i></b>" +
            "<li>The steamer anchored at Malta. Being confined in his cabin, Rizal was unable to visit the famous island-fortress of the Christian crusaders.</li><br>" +
            "<b><i>October 3-6, 1896</i></b>" +
            "<li>The steamer arrived in Barcelona on October 3, with Rizal a prisoner on board. The trip from Manila to Spain lasted exactly 30 days. He was kept under heavy guard in his cabin for three days.</li><br>" +
            "<b><i>October 6, 1896</i></b>" +
            "<li>Rizal was taken aboard <i>Colon</i>. The ship left Barcelona in the evening, with Rizal on board. It reached Manila on November 3, and Rizal was transferred to Fort Santiago.</li>"
        ]
    },
    {
        position: [14.4770, 121.0550], //Bagumbayan, PH (1896)
        info: ["<strong>Bagumbayan, Manila, Philippines</strong><br>" +
            "José Rizal was sentenced to death by the Spanish colonial authorities on charges of sedition, rebellion, and inciting revolution. Although he had never directly participated in the armed revolt, his writings, particularly " +
            "<i>Noli Me Tangere</i> and <i>El Filibusterismo</i>, inspired Filipinos to rise against Spanish rule, making him a symbol of resistance. The Spanish authorities, fearing his influence, orchestrated a swift trial, denying him a fair defense, and condemned him to die by firing squad.<br><br>" +
            "On <b>December 30, 1896</b>, at exactly <b>7:03</b> in the morning, Rizal was led to the Bagumbayan (now Luneta Park) in Manila, where a firing squad of eight soldiers stood ready. Despite his dire fate, Rizal faced his execution with remarkable composure and courage. He was blindfolded and, " +
            "before he fell to the ground, Rizal turned to face his executioners, symbolizing his unwavering commitment to his ideals. As the shots rang out, his body crumpled to the ground, marking the end of his life—but the beginning of his legacy as a martyr for Philippine independence."
        ]
    },
]

let currentIndex = 0;
let madridInfoIndex = { first: 0, second: 0, third: 0};
let manilaInfoIndex = { first: 0, second: 0, third: 0 };
let parisInfoIndex = { first: 0, second: 0, third: 0};
let brusselsInfoIndex = { first: 0, second: 0 };
let hongkongInfoIndex = { first: 0, second: 0 };
let singaporeInfoIndex = { first: 0, second: 0 };
let suezInfoIndex = { first: 0, second: 0 };
let barcelonaInfoIndex = { first: 0, second: 0 };
let lastClicked = null; //madrid
let lastClicked2 = null; //manila
let lastClicked3 = null; //paris
let lastClicked4 = null; //brussels
let lastClicked5 = null; //hong kong
let lastClicked6 = null; //singapore
let lastClicked7 = null; //suez canal
let lastClicked8 = null; //barcelona
const markers = [];

const redMarkerIcon = L.icon({
iconUrl: 'https://img.icons8.com/ios-filled/50/ff0000/marker.png',
iconSize: [40, 40],
iconAnchor: [15, 40], 
popupAnchor: [0, -34], 
});

//to create markers and add to the map
function createMarkers() {
    locations.forEach((location, index) => {
        const marker = L.marker(location.position, { icon: redMarkerIcon }).addTo(map);
        marker.bindPopup(location.info[0]);
        markers.push(marker);

        //Madrid markers
        if (index === 8 || index === 10 || index == 40) {
            marker.on('click', () => {
                let newContent;

                if (index === 8) {
                    newContent = locations[8].info[madridInfoIndex.first];
                    madridInfoIndex.first = (madridInfoIndex.first + 1) % locations[8].info.length;
                } else if (index === 10) {
                    newContent = locations[10].info[madridInfoIndex.second];
                    madridInfoIndex.second = (madridInfoIndex.second + 1) % locations[10].info.length;
                } else if (index === 40) {
                    newContent = locations[40].info[madridInfoIndex.third];
                    madridInfoIndex.third = (madridInfoIndex.third + 1) % locations[40].info.length;

                    const firstVisitInfo = locations[8].info.join('<br>');
                    const secondVisitInfo = locations[10].info.join('<br>');
                    newContent = firstVisitInfo + '<br>' +  secondVisitInfo + '<br>' + newContent;
                }


                marker.getPopup().setContent(newContent).openOn(map);
                lastClicked = index;
            });
        }

        //manila
        if (index === 0 || index === 27 || index == 45) { 
            marker.on('click', () => {
                let newContent2;

                if (index === 0) {
                    newContent2 = locations[0].info[manilaInfoIndex.first];
                    manilaInfoIndex.first = (manilaInfoIndex.first + 1) % locations[0].info.length;
                } else if (index === 27) {
                    newContent2 = locations[27].info[manilaInfoIndex.second];
                    manilaInfoIndex.second = (manilaInfoIndex.second + 1) % locations[27].info.length;

                } else if (index === 45) {
                    newContent2 = locations[45].info[manilaInfoIndex.third];
                    manilaInfoIndex.third = (manilaInfoIndex.third + 1) % locations[45].info.length;

                    const firstVisitInfo1 = locations[0].info.join('<br>');
                    const secondVisitInfo1 = locations[27].info.join('<br>');
                    newContent2 = firstVisitInfo1 + '<br>' +  secondVisitInfo1 + '<br>' + newContent2;
                }

                marker.getPopup().setContent(newContent2).openOn(map);
                lastClicked2 = index; 
            });
        }

        //Paris markers
        if (index === 9 || index === 11 || index == 38) {
            marker.on('click', () => {
                let newContent3;

                if (index === 9) {
                    newContent3 = locations[9].info[parisInfoIndex.first];
                    parisInfoIndex.first = (parisInfoIndex.first + 1) % locations[9].info.length;
                } else if (index === 11) {
                    newContent3 = locations[11].info[parisInfoIndex.second];
                    parisInfoIndex.second = (parisInfoIndex.second + 1) % locations[11].info.length;
                } else if (index === 38) {
                    newContent3 = locations[38].info[parisInfoIndex.third];
                    parisInfoIndex.third = (parisInfoIndex.third + 1) % locations[38].info.length;

                    const firstVisitInfo2 = locations[9].info.join('<br>');
                    const secondVisitInfo2 = locations[11].info.join('<br>');
                    newContent3 = firstVisitInfo2 + '<br>' +  secondVisitInfo2 + '<br>' + newContent3;
                }

                marker.getPopup().setContent(newContent3).openOn(map);
                lastClicked3 = index;
            });
        }

        //brussels
        if (index === 39 || index === 42) { 
            marker.on('click', () => {
                let newContent4;

                if (index === 39) {
                    newContent4 = locations[39].info[brusselsInfoIndex.first];
                    brusselsInfoIndex.first = (brusselsInfoIndex.first + 1) % locations[39].info.length;
                } else if (index === 42) {
                    newContent4 = locations[42].info[brusselsInfoIndex.second];
                    brusselsInfoIndex.second = (brusselsInfoIndex.second + 1) % locations[42].info.length;

                    const firstVisitInfo4 = locations[39].info.join('<br>');
                    newContent4 = firstVisitInfo4 + '<br>' + newContent4;
                }

                marker.getPopup().setContent(newContent4).openOn(map);
                lastClicked4 = index; 
            });
        }

        //hong kong
        if (index === 29 || index === 44) { 
            marker.on('click', () => {
                let newContent5;

                if (index === 29) {
                    newContent5 = locations[29].info[hongkongInfoIndex.first];
                    hongkongInfoIndex.first = (hongkongInfoIndex.first + 1) % locations[29].info.length;
                } else if (index === 44) {
                    newContent5 = locations[44].info[hongkongInfoIndex.second];
                    hongkongInfoIndex.second = (hongkongInfoIndex.second + 1) % locations[44].info.length;

                    const firstVisitInfo5 = locations[29].info.join('<br>');
                    newContent5 = firstVisitInfo5 + '<br>' + newContent5;
                }

                marker.getPopup().setContent(newContent5).openOn(map);
                lastClicked5 = index; 
            });
        }

        //singapore
        if (index === 1 || index === 48) { 
            marker.on('click', () => {
                let newContent6;

                if (index === 1) {
                    newContent6 = locations[1].info[singaporeInfoIndex.first];
                    singaporeInfoIndex.first = (singaporeInfoIndex.first + 1) % locations[1].info.length;
                } else if (index === 48) {
                    newContent6 = locations[48].info[singaporeInfoIndex.second];
                    singaporeInfoIndex.second = (singaporeInfoIndex.second + 1) % locations[48].info.length;

                    const firstVisitInfo6 = locations[1].info.join('<br>');
                    newContent6 = firstVisitInfo6 + '<br>' + newContent6;
                }

                marker.getPopup().setContent(newContent6).openOn(map);
                lastClicked6 = index; 
            });
        }

        //suez canal
        if (index === 4 || index === 49) { 
            marker.on('click', () => {
                let newContent7;

                if (index === 4) {
                    newContent7 = locations[4].info[suezInfoIndex.first];
                    suezInfoIndex.first = (suezInfoIndex.first + 1) % locations[4].info.length;
                } else if (index === 49) {
                    newContent7 = locations[49].info[suezInfoIndex.second];
                    suezInfoIndex.second = (suezInfoIndex.second + 1) % locations[49].info.length;

                    const firstVisitInfo7 = locations[4].info.join('<br>');
                    newContent7 = firstVisitInfo7 + '<br>' + newContent7;
                }

                marker.getPopup().setContent(newContent7).openOn(map);
                lastClicked7 = index; 
            });
        }

        //barcelona
        if (index === 7 || index === 50) { 
            marker.on('click', () => {
                let newContent8;

                if (index === 7) {
                    newContent8 = locations[7].info[barcelonaInfoIndex.first];
                    barcelonaInfoIndex.first = (barcelonaInfoIndex.first + 1) % locations[7].info.length;
                } else if (index === 50) {
                    newContent8 = locations[50].info[barcelonaInfoIndex.second];
                    barcelonaInfoIndex.second = (barcelonaInfoIndex.second + 1) % locations[50].info.length;

                    const firstVisitInfo8 = locations[7].info.join('<br>');
                    newContent8 = firstVisitInfo8 + '<br>' + newContent8;
                }

                marker.getPopup().setContent(newContent8).openOn(map);
                lastClicked8 = index; 
            });
        }
    });
}


//to update map view and popup with transition
function updateMap() {
    const location = locations[currentIndex];

    map.flyTo(location.position, 10, { duration: 1 }); //transition
    markers[currentIndex].openPopup();

    //trace lines
    if (currentIndex > 0) {
        const previousLocation = locations[currentIndex - 1];
        const latlngs = [previousLocation.position, location.position];
        L.polyline(latlngs, { color: 'blue', weight: 3 }).addTo(map);
    }
}

createMarkers();
updateMap();

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { //move to next location
        currentIndex = (currentIndex + 1) % locations.length;
        updateMap();
    } else if (event.key === 'ArrowLeft') { //move to previous location
        currentIndex = (currentIndex - 1 + locations.length) % locations.length;
        updateMap();
    }
});

/**
 
document.getElementById('nextBtn').addEventListener('click', () => {  //event listeners for buttons
    currentIndex = (currentIndex + 1) % locations.length; 
    updateMap();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + locations.length) % locations.length;
    updateMap();
});
**/