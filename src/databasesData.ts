export interface DatabaseItem {
  id: number | string;
  title: string;
  publisher: string;
  description: string;
  subjects: string[];
  link: string;
}

export const DATABASES: DatabaseItem[] = [
  {
    id: 1165,
    title: "Academic Journals",
    publisher: "Academic Journals",
    description: "A publisher of peer-reviewed open access journals covering art and humanities, engineering, medical science, social sciences, biological sciences, physical sciences, and agricultural sciences. Its mission is to accelerate the dissemination of knowledge using the open access model.",
    subjects: ["Engineering", "Open Access", "Social Science", "Medicine, Health & Science", "Arts & Humanities", "Psychology", "Computer Science", "Business", "Marketing", "Economics", "Technology"],
    link: "https://academicjournals.org/"
  },
  {
    id: 1166,
    title: "ACM Digital Library",
    publisher: "Association for Computing Machinery",
    description: "The ACM Digital Library is a comprehensive collection of full-text articles and bibliographic records covering the fields of computing and information technology, including machine learning, artificial intelligence, cybersecurity, software engineering, and programming. The library has access to Open Access Content.",
    subjects: ["Computer Science", "Engineering", "Medicine, Health & Science", "Artificial Intelligence", "Open Access"],
    link: "https://dl.acm.org/"
  },
  {
    id: 369,
    title: "ArXiv",
    publisher: "ArXiv",
    description: "A free distribution service and open-access archive for nearly 2.4 million scholarly articles in the fields of physics, mathematics, computer science, quantitative biology, quantitative finance, statistics, electrical engineering, systems science, and economics.",
    subjects: ["Mathematics", "Computer Science", "Physics", "Statistics", "Open Access", "Database", "EResource"],
    link: "https://arxiv.org/"
  },
  {
    id: 450,
    title: "BAILLI: The British and Irish Legal Information Institute (BAILII)",
    publisher: "The Incorporated Council of Law Reporting for England & Wales",
    description: "Provides access to the most comprehensive set of British and Irish primary legal materials available for free, covering 10 jurisdictions and hosting over 1 million searchable documents including legislation and case law.",
    subjects: ["Law", "Open Access"],
    link: "https://www.bailii.org/"
  },
  {
    id: 449,
    title: "Barnardos Library & Information Service: Barnardos Knowledge Bank",
    publisher: "Barnardos",
    description: "An open-access Irish repository providing free eBooks, research reports, practice guides, and briefings on children and families, child protection, early years education, parenting, and family support.",
    subjects: ["Open Access", "EResource", "Database", "Social Science", "Early Childhood", "Children", "Education", "Teaching"],
    link: "https://www.barnardos.ie/learning-development/library-information-service/"
  },
  {
    id: 393,
    title: "BASE: Bielefeld Academic Search Engine",
    publisher: "Bielefeld University",
    description: "One of the world's most voluminous search engines for academic web resources, indexing over 400 million records from more than 11,000 sources. Free full-text access is available for about 60% of the indexed documents.",
    subjects: ["Science", "Computer Science", "Open Access", "Database", "Data Science", "Hybrid Open Access", "Psychology", "Social Science", "Language", "Technology", "Literature", "History", "Arts & Humanities"],
    link: "https://www.base-search.net/"
  },
  {
    id: 453,
    title: "BCcampus OpenEd Collection",
    publisher: "BCcampus",
    description: "A curated collection of openly licensed educational resources, textbooks, and courses. Free to use, customize, and share, supporting learners and educators globally.",
    subjects: ["Open Access", "Database", "Business", "Computer Science", "Education", "Language", "Law", "Social Science"],
    link: "https://collection.bccampus.ca/"
  },
  {
    id: 1167,
    title: "Bentham Open Science",
    publisher: "Bentham Science Publishers",
    description: "A leading global open-access publisher of peer-reviewed science, technology, and medical research, providing high-quality articles with CC-BY 4.0 licenses.",
    subjects: ["Psychology", "Engineering", "Medicine, Health & Science", "Biology", "Open Access"],
    link: "https://benthamopenscience.com/"
  },
  {
    id: 670,
    title: "Bloomsbury (Open Access Collection)",
    publisher: "Bloomsbury Publishing",
    description: "Offers free access to over 930 titles in the humanities and social sciences, covering Education, History, Law, Linguistics, Philosophy, Politics, and Sociology.",
    subjects: ["Open Access", "Education", "Law", "Social Science", "Language", "Economics", "Psychology", "Medicine, Health & Science"],
    link: "https://www.bloomsburycollections.com/search-results?any=&acc=oa&sort=desc&field=date"
  },
  {
    id: 553,
    title: "BMC: BioMed Central (Open Access)",
    publisher: "Springer",
    description: "An evolving portfolio of some 300 peer-reviewed journals, sharing discoveries from research communities across science, technology, engineering, and medicine.",
    subjects: ["Open Access", "Computer Science", "Education", "Engineering", "Social Science", "Criminology", "Medicine, Health & Science", "Psychology", "Economics", "Business", "Management", "Mathematics", "Technology"],
    link: "https://www.biomedcentral.com/journals"
  },
  {
    id: 551,
    title: "BRILL (Open Access Resources)",
    publisher: "De Gruyter Brill",
    description: "A leading publisher in the humanities, social sciences, and STEM fields, offering thousands of open access books, chapters, and peer-reviewed journal articles.",
    subjects: ["Open Access", "Social Science", "Education", "Human Rights", "Law", "Language", "Management", "Economics"],
    link: "https://brill.com/page/510192"
  },
  {
    id: 541,
    title: "Cambridge University Press (Open Access)",
    publisher: "Cambridge University Press",
    description: "Operates an open access database featuring over 180 journals and 540 books across academic fields, supporting scholarly communication and research worldwide.",
    subjects: ["Database", "Open Access", "Medicine", "Health & Science", "Arts & Humanities", "Computer Science", "Mathematics", "Language", "Psychology", "Psychiatry", "Engineering", "Social Science", "Education", "Management", "Business"],
    link: "https://www.cambridge.org/core/publications/open-access"
  },
  {
    id: 390,
    title: "Cogprints",
    publisher: "University of Southampton",
    description: "An electronic archive for self-archived papers in any area of psychology, neuroscience, linguistics, computer science (AI, robotics, learning), philosophy, biology, medicine, and anthropology.",
    subjects: ["Computer Science", "Open Access", "Machine Learning", "Psychology", "Database", "Artificial Intelligence", "Human Machine Interaction"],
    link: "https://web-archive.southampton.ac.uk/cogprints.org/index.html"
  },
  {
    id: 301,
    title: "CORE: COnnecting REpositories",
    publisher: "The Open University",
    description: "The world's largest aggregator of open access papers, indexing over 370 million scholarly resources from global repositories and journals for text and data mining.",
    subjects: ["EResource", "Open Access", "Database", "Computer Science", "Business", "Economics", "Management", "Social Science", "Psychology", "Care", "Education", "Criminology", "Technology", "Marketing", "Engineering", "Language", "Early Childhood"],
    link: "https://core.ac.uk/"
  },
  {
    id: 732,
    title: "Data Management Plan: DMP Online",
    publisher: "Digital Curation Centre (DCC)",
    description: "A free online tool designed to help researchers create, review, and share data management plans tailored to institutional and funder requirements.",
    subjects: ["Research Data Management", "Data Management Planning Tools", "Scholarly Research Infrastructure", "Research Funders’ Compliance Support", "Open‑Source Research Software"],
    link: "https://dmponline.dcc.ac.uk/"
  },
  {
    id: 677,
    title: "De Gruyter Brill (Open Access Books)",
    publisher: "De Gruyter Brill",
    description: "Provides access to more than 2,500 open access eBooks and 25,000 chapters across the humanities, social sciences, and STEM fields. Users are required to create a free account.",
    subjects: ["Open Access", "Social Science", "Business", "Economics", "Finance", "Medicine, Health & Science", "Computer Science", "Technology", "Mathematics", "Literature", "Law"],
    link: "https://www.degruyterbrill.com/"
  },
  {
    id: 676,
    title: "De Gruyter Brill (Open Access Journals)",
    publisher: "De Gruyter Brill",
    description: "Features 221 peer-reviewed open access journals containing over 129,000 scholarly articles in academic disciplines. A free account is required for full-text downloads.",
    subjects: ["Open Access", "Social Science", "Business", "Economics", "Mathematics", "Computer Science", "Engineering", "Technology"],
    link: "https://www.degruyterbrill.com/"
  },
  {
    id: 452,
    title: "Digital Commons Network",
    publisher: "The Digital Commons Network",
    description: "Provides free access to full-text scholarly articles, peer-reviewed journal articles, dissertations, and working papers from hundreds of global universities and colleges.",
    subjects: ["Open Access", "Database", "Business", "Social Science", "Arts & Humanities", "Law", "Medicine, Health & Science", "Education", "Engineering", "Mathematics", "Psychology"],
    link: "https://network.bepress.com/"
  },
  {
    id: 464,
    title: "DOAB: Directory of Open Access Books",
    publisher: "DOAB",
    description: "A community-driven discovery service indexing over 99,500 academic, peer-reviewed open access books with metadata and links to trusted publishers.",
    subjects: ["Open Access", "Database", "Computer Science", "Business", "Social Science", "Law", "Language", "Economics", "Medicine, Health & Science", "Technology", "Engineering", "Early Childhood", "Criminology"],
    link: "https://www.doabooks.org/"
  },
  {
    id: 683,
    title: "DOAJ: Directory of Open Access Journals",
    publisher: "Infrastructure Services for Open Access",
    description: "An independent, international database indexing high-quality, peer-reviewed open access scholarly journals from around the world across science, engineering, and social science.",
    subjects: ["Open Access", "Social Science", "Arts & Humanities", "Medicine, Health & Science", "Computer Science", "Engineering", "Technology", "Business", "Management", "Economics", "Education", "Law"],
    link: "https://doaj.org/"
  },
  {
    id: 300,
    title: "EBSCOhost",
    publisher: "EBSCO Industries, LLC",
    description: "Offers high-quality database searching across over 4,000 peer-reviewed journals. This is a library-supported premium subscription that requires ENTRA authentication.",
    subjects: ["EResource", "Database", "Business", "Law", "Social Science", "History", "Early Childhood", "Computer Science"],
    link: "https://search.ebscohost.com/login.aspx?authtype=athens"
  },
  {
    id: 543,
    title: "eCampus Ontario Open Textbook Library",
    publisher: "eCampusOntario",
    description: "A collaborative digital portal in Canada providing learners and educators access to over 1,970 freely available, open educational resource textbooks.",
    subjects: ["Open Access", "Open Educational Resource", "Database", "Business", "Economics", "Engineering", "Social Science", "Medicine, Health & Science", "Technology", "Criminology", "Law", "Psychology"],
    link: "https://openlibrary.ecampusontario.ca/"
  },
  {
    id: 540,
    title: "electronic Irish Statute Book (eISB)",
    publisher: "Government of Ireland",
    description: "Provides access to the Acts of the Oireachtas, Statutory Instruments, the Constitution, and pre-1922 legislation, along with amendment tracking and legal references.",
    subjects: ["Law", "Database", "Criminal Law", "Civil Law"],
    link: "https://www.irishstatutebook.ie/"
  },
  {
    id: 358,
    title: "Elsevier Open Access Journals",
    publisher: "Elsevier",
    description: "An extensive collection of over 1,250 fully open access journals covering medicine, life sciences, engineering, quantitative computing, and social sciences.",
    subjects: ["EJournal", "Database", "Business", "Law", "Social Science", "Early Childhood", "Computer Science", "Open Access", "Medicine, Health & Science", "Care", "Engineering", "Mathematics", "Arts & Humanities", "Economics", "Finance", "Psychology"],
    link: "https://www.sciencedirect.com/"
  },
  {
    id: 542,
    title: "ELSEVIER: Open Archive",
    publisher: "Elsevier",
    description: "Provides permanent free access to archives of more than 140 peer-reviewed journals after designated embargo periods, supporting open science.",
    subjects: ["Database", "Open Access", "Business", "Economics", "Management", "Computer Science", "Technology", "Engineering", "Psychology", "Social Science", "Education", "Criminology", "Law", "Mathematics", "Medicine, Health & Science"],
    link: "https://www.elsevier.com/open-access/open-archive"
  },
  {
    id: 581,
    title: "ERIC: Education Resource Information Center",
    publisher: "Institute of Education Sciences",
    description: "Sponsored by the U.S. Department of Education, providing extensive access to education-related literature, indexing over 14,000 research papers annually.",
    subjects: ["Database", "Early Childhood", "Social Science", "Education", "Teaching", "Technology", "Computer Science", "Open Educational Resource"],
    link: "https://eric.ed.gov/"
  },
  {
    id: 501,
    title: "Eur-Lex",
    publisher: "European Union",
    description: "Serves as the official online gateway to European Union Law, offering comprehensive multi-lingual access to EU treaties, case law, preparatory documents, and legal acts.",
    subjects: ["European Law", "Law", "Database"],
    link: "https://eur-lex.europa.eu/homepage.html"
  },
  {
    id: 537,
    title: "Eurostat",
    publisher: "European Union",
    description: "The statistical office of the European Union, responsible for producing and disseminating high-quality, comparable statistics and indicators for regional planning.",
    subjects: ["Database", "Law", "Statistics", "European Union"],
    link: "https://ec.europa.eu/eurostat"
  },
  {
    id: 539,
    title: "Frontiers",
    publisher: "Frontiers Media",
    description: "A leading open-access publisher hosting over 220 journals and 640,000 peer-reviewed articles across the natural sciences, engineering, health, and humanities.",
    subjects: ["Social Science", "Law", "Psychology", "Criminology", "Forensics", "Computer Science", "Education", "Arts & Humanities", "Engineering", "Business", "Medicine, Health & Science", "Open Access"],
    link: "https://www.frontiersin.org/articles"
  },
  {
    id: 671,
    title: "HathiTrust Digital Library",
    publisher: "University of Michigan",
    description: "A collaborative preservation repository storing over 19 million digitized volumes. Approximately 40% of the collection is fully available for public online reading.",
    subjects: ["Open Access", "Hybrid Open Access", "Business", "Economics", "Computer Science", "Social Science", "Medicine, Health & Science", "History", "Language", "Law", "Technology", "Education", "Arts & Humanities"],
    link: "https://www.hathitrust.org/"
  },
  {
    id: 692,
    title: "American Physiological Society",
    publisher: "American Physiological Society",
    description: "The APS Subscribe to Open (S2O) program delivers 10 fully open access journals containing over 100,000 articles on molecular, cellular, and physiological science.",
    subjects: ["Open Access", "Medicine", "Health & Science", "Biology", "Physiology"],
    link: "https://journals.physiology.org/s2o-faq"
  },
  {
    id: 688,
    title: "IEEE Computer Society Digital Library (CSDL)",
    publisher: "IEEE: Computer Society",
    description: "Provides full-text and open-access search capabilities for computing journals, conference proceedings, transactions, and technical standards.",
    subjects: ["Open Access", "Computer Science", "Artificial Intelligence", "Machine Learning", "Data Science", "Computer Networking", "Cybersecurity", "Human Machine Interaction", "Embedded Systems", "Algorithms"],
    link: "https://www.computer.org/csdl/home"
  },
  {
    id: 586,
    title: "IEEE: Institute of Electrical and Electronics Engineers",
    publisher: "IEEE Xplore",
    description: "Features over 30 gold fully open access journals and 180 hybrid journals supporting technical engineering research, hardware design, and computing.",
    subjects: ["Open Access", "Hybrid Open Access", "Database", "Engineering", "Computer Science", "Computer Networking", "GDPR", "Medicine", "Health & Science"],
    link: "https://ieeexplore.ieee.org/Xplore/home.jsp"
  },
  {
    id: 587,
    title: "Informit Open Access",
    publisher: "Pearson Education.",
    description: "Australia's leading database for online journals, books, and reports in humanities and social sciences. Features over 24,000 open access resources.",
    subjects: ["Open Access", "Database", "Social Science", "Medicine", "Health & Science", "Engineering", "Science", "Psychology", "Criminology", "Computer Science"],
    link: "https://search.informit.org/action/doSearch?logicalOpe=AND&ConceptID=503248&Ppub="
  },
  {
    id: 801,
    title: "IntechOpen",
    publisher: "IntechOpen",
    description: "An open access academic publisher specializing in peer-reviewed scientific books, hosting over 7,800 open-access books across STEM disciplines.",
    subjects: ["Open Access", "Business", "Management", "Accountancy", "Computer Science", "Engineering", "Mathematics", "Robotics", "Technology", "Medicine", "Health & Science", "Social Science", "Arts & Humanities", "Psychology"],
    link: "https://www.intechopen.com/"
  },
  {
    id: 1197,
    title: "IOPscience",
    publisher: "IOP Publishing",
    description: "Scholarly database from the Institute of Physics providing access to journals, ebooks, conference proceedings, and gold open-access research.",
    subjects: ["Engineering", "Data Analytics", "Cybersecurity", "Big Data", "Artificial Intelligence", "Machine Learning", "Software engineering", "Open Access"],
    link: "https://iopscience.iop.org/"
  },
  {
    id: 337,
    title: "JSTOR (Open Access Resources)",
    publisher: "ITHAKA",
    description: "Offers access to a massive library of peer-reviewed journals, primary sources, and more than 13,000 open-access books from 145 participating publishers.",
    subjects: ["Database", "Open Access", "EResource", "Social Science", "Medicine", "Health & Science", "Arts & Humanities", "Computer Science", "Engineering", "Psychology", "Social Work", "Technology", "Education", "Mathematics"],
    link: "https://about.jstor.org/oa-and-free/"
  },
  {
    id: 720,
    title: "MDPI",
    publisher: "MDPI",
    description: "A pioneer in scholarly open access publishing, offering 497 peer-reviewed journals and over 1.8 million research articles worldwide.",
    subjects: ["Open Access", "Social Science", "Arts & Humanities", "Medicine", "Health & Science", "Business", "Computer Science", "Science", "Language", "Technology"],
    link: "https://www.mdpi.com/"
  },
  {
    id: 306,
    title: "MERLOT",
    publisher: "MERLOT: Multimedia Educational Resource for Learning and Online Teaching",
    description: "Consists of over 109,000 peer-reviewed, discipline-specific learning materials, exercises, and open textbook annotations. Free user registration required.",
    subjects: ["Open Access", "Database", "Education", "Teaching", "Science"],
    link: "https://www.merlot.org/merlot/index.htm"
  },
  {
    id: 675,
    title: "MIT Press Direct Journals (Open Access)",
    publisher: "Massachusetts Institute of Technology (MIT)",
    description: "Features 41 prestigious open access journals in cognitive science, linguistics, artificial intelligence, economics, and digital humanities.",
    subjects: ["Engineering", "Data Analytics", "Cybersecurity", "Open Access", "Psychology", "Social Science", "Medicine", "Health & Science", "Criminology", "Computer Science"],
    link: "https://direct.mit.edu/journals/pages/open-access"
  },
  {
    id: 304,
    title: "The National Resource Hub",
    publisher: "National Forum for the Enhancement of Teaching and Learning in Higher Education",
    description: "A collaborative, searchable hub containing Irish open educational resources (OER) for teaching and learning across the higher education sector.",
    subjects: ["Open Access", "Education", "Teaching", "Open Educational Resource"],
    link: "https://hub.teachingandlearning.ie/"
  },
  {
    id: 734,
    title: "OA.mg",
    publisher: "Citationsy Ltd",
    description: "A fast, open-access paper search engine that aggregates over 240 million research papers, indexing metadata to provide links to legal repository PDFs.",
    subjects: ["Open Access", "EResource", "Social Science", "Arts & Humanities", "Medicine", "Health & Science", "Technology", "Business", "Economics", "Accounting", "Law", "Early Childhood"],
    link: "https://oa.mg/"
  },
  {
    id: 372,
    title: "OAPEN",
    publisher: "OAPEN",
    description: "An independent Dutch foundation supporting open access for peer-reviewed academic books, hosting over 40,000 resources in OAPEN and DOAB directories.",
    subjects: ["Open Access", "Database", "Early Childhood", "Law", "Maths", "Business", "Social Science", "Education", "Medicine", "Health & Science", "Arts & Humanities", "Criminology", "Economics", "Management", "Care", "Computer Science"],
    link: "http://www.oapen.org/home"
  },
  {
    id: 374,
    title: "Open Book Publishers",
    publisher: "Open Book Publishers",
    description: "A leading independent open access academic press in the UK, publishing over 400 peer-reviewed textbooks, monographs, and critical translations.",
    subjects: ["Open Access", "Database", "EResource", "Business", "Mathematics", "Social Science", "Computer Science", "Psychology", "Law"],
    link: "https://www.openbookpublishers.com/"
  },
  {
    id: 307,
    title: "Open Educational Resources Commons",
    publisher: "ISKME",
    description: "A massive public catalog featuring over 50,000 high-quality open educational resources, full university courses, climate education, and lesson plans.",
    subjects: ["Open Access", "Database", "Business", "Science", "Education", "Open Educational Resource", "Social Science"],
    link: "https://oercommons.org/"
  },
  {
    id: 498,
    title: "Open Oregon Educational Resources",
    publisher: "Open Oregon Educational Resources",
    description: "Promotes college textbook affordability and facilitates widespread educational adoption of open, low-cost, high-quality course materials.",
    subjects: ["Open Access", "Open Educational Resource"],
    link: "https://openoregon.pressbooks.pub/"
  },
  {
    id: 496,
    title: "Open Textbook Library",
    publisher: "University of Minnesota's College of Education",
    description: "Offers over 1,740 academic open textbooks, supported by the Open Education Network. All textbooks are fully peer-reviewed and customizable.",
    subjects: ["Open Educational Resource Textbook", "Open Access", "Business", "Economics", "Management", "Human Resources", "Marketing", "Computer Science", "Education", "Early Childhood", "Engineering", "Technology", "Arts & Humanities", "Law", "Mathematics", "Medicine", "Health & Science", "Psychology", "Criminology"],
    link: "https://open.umn.edu/opentextbooks/"
  },
  {
    id: 392,
    title: "OpenAIRE",
    publisher: "OpenAire",
    description: "A massive European dataset mapping research information covering 206 million publications, 86 million research datasets, and 740K software resources.",
    subjects: ["Computer Science", "Computing", "Open Access", "Database"],
    link: "https://explore.openaire.eu/"
  },
  {
    id: 305,
    title: "OpenStax",
    publisher: "Rice University",
    description: "A nonprofit educational publisher at Rice University, publishing high-quality, peer-reviewed, openly licensed textbooks for college and high school courses.",
    subjects: ["Business", "Computer Science", "Social Science", "Science", "Open Educational Resource Textbook", "Open Access", "Open Educational Resource"],
    link: "https://openstax.org/"
  },
  {
    id: 672,
    title: "Oxford Academic Books (Open Access Collection)",
    publisher: "Oxford University Press",
    description: "The OUP open access collection provides thousands of scholarly book chapters and monographs across law, history, medicine, science, and education.",
    subjects: ["Open Access", "Social Science", "Arts & Humanities", "Science", "Mathematics", "Law", "Computer Science", "Business", "Economics", "Management", "Criminology", "Language", "Engineering", "Technology", "Care"],
    link: "https://academic.oup.com/books/search-results?allJournals=1&fl_SiteID=6283&cqb=%5b%5d&access_openaccess=true&access_free=true"
  },
  {
    id: 673,
    title: "Oxford Academic Journals (Open Access)",
    publisher: "Oxford University Press",
    description: "An online platform of OUP hosting 590+ journals and over 1.1 million articles, providing gold and hybrid open-access peer-reviewed literature.",
    subjects: ["Computer Science", "Mathematics", "Engineering", "Technology", "Physics", "Medicine", "Health & Science", "Open Access", "Hybrid Open Access", "Social Science", "Business", "Management", "Economics", "Human Resources", "Language", "Arts & Humanities"],
    link: "https://academic.oup.com/"
  },
  {
    id: 674,
    title: "Oxford Open Journals",
    publisher: "Oxford University Press",
    description: "A subset of 7 fully open access journals focusing on specialized topics like climate, digital health, economics, energy, immunology, and materials science.",
    subjects: ["Economics", "Medicine", "Health & Science", "Psychology", "Business", "Data Analytics", "Social Science", "Open Access"],
    link: "https://academic.oup.com/oxfordopenjournals"
  },
  {
    id: 664,
    title: "Oxford Research Archive (Open Access)",
    publisher: "Oxford University Research Archive",
    description: "ORA Book Collection provides open-access to 2,565 books and book chapters from the University of Oxford across major humanities and medical science research.",
    subjects: ["Social Science", "Medicine", "Health & Science", "Arts & Humanities", "Mathematics", "Open Access"],
    link: "https://ora.ox.ac.uk/collections/book"
  },
  {
    id: 725,
    title: "Paperity",
    publisher: "Paperity Sp. z o.o",
    description: "A global open-access research aggregator providing access to 11 million papers from nearly 30,000 academic journals across science and social science.",
    subjects: ["Open Access", "Arts & Humanities", "Social Science", "Medicine", "Health & Science", "Language", "Technology", "Computer Science", "Business"],
    link: "https://paperity.org/"
  },
  {
    id: 986,
    title: "Perlego",
    publisher: "Perlego",
    description: "A digital subscription-based academic library that provides access to 1.4 million academic and professional books. Accounts are issued on a short loan basis.",
    subjects: ["Business", "Early Childhood", "Nursing", "Social Science", "Medicine", "Health & Science", "Law", "Criminology", "Psychology", "Computer Science", "Engineering", "Arts & Humanities", "Economics", "Marketing", "Human Resources"],
    link: "https://www.perlego.com/home"
  },
  {
    id: 935,
    title: "Pressbooks Directory",
    publisher: "Hugh McGuire",
    description: "A public, searchable directory cataloging thousands of open textbooks, self-published books, and learning materials created on the Pressbooks platform.",
    subjects: ["Business", "Nursing", "Psychology", "Medicine", "Health & Science", "Arts & Humanities", "Social Science", "Language", "Early Childhood", "Open Educational Resource", "Data Analytics", "Computer Science"],
    link: "https://pressbooks.com/"
  },
  {
    id: 538,
    title: "PubMed Central: Open Access Subset",
    publisher: "National Library of Medicine",
    description: "A digital archive of biomedical and life sciences literature at the U.S. National Institutes of Health, offering millions of open access articles.",
    subjects: ["Engineering", "Data Analytics", "Cybersecurity", "Computer Science", "Social Science", "Medicine", "Health & Science", "Psychology", "Criminology"],
    link: "https://pmc.ncbi.nlm.nih.gov/about/collections/"
  },
  {
    id: 733,
    title: "re3data",
    publisher: "re3data Working Group",
    description: "A global open-science registry that provides a comprehensive directory of research data repositories across all academic disciplines.",
    subjects: ["Data Management Planning Tools", "Research Data Repositories", "Open Science Infrastructure", "Data Discovery and Access", "Scholarly Data Sharing Services"],
    link: "https://www.re3data.org/"
  },
  {
    id: 746,
    title: "Registry of Open Access Repositories",
    publisher: "University of Southampton",
    description: "ROAR categorizes and lists counts of global open-access repositories—including institutional, data repository, and thesis servers—maintained in the UK.",
    subjects: ["Open Access", "Open Access Repositories", "Repository Directory", "Data Management Planning Tools", "Academic Publishing"],
    link: "https://roar.eprints.org/view/type/"
  },
  {
    id: 610,
    title: "Routledge (Open Access)",
    publisher: "Routledge",
    description: "Features thousands of open access books, chapters, and series content in the humanities, social sciences, STEM, and behavioral sciences.",
    subjects: ["Open Access", "Social Science", "Computer Science", "Engineering", "Medicine", "Health & Science"],
    link: "https://www.routledge.com/search?pg=1&pp=12&oa=true&so=pub&view=grid"
  },
  {
    id: 609,
    title: "Sage (Open Access Journals)",
    publisher: "SAGE Publications",
    description: "A massive scholarly database featuring over 200 Gold Open Access journals, covering medicine, nursing, criminology, engineering, and social sciences.",
    subjects: ["Engineering", "Data Analytics", "Cybersecurity", "Computer Science", "Business", "Economics", "Social Science", "Psychology", "Criminology"],
    link: "https://journals.sagepub.com/"
  },
  {
    id: 682,
    title: "Science Direct (Open Access Journals)",
    publisher: "Elsevier",
    description: "ScienceDirect provides access to gold open access and hybrid peer-reviewed journals, covering a wide range of academic research fields.",
    subjects: ["Hybrid Open Access", "Social Science", "Medicine", "Health & Science", "Computer Science", "Artificial Intelligence", "Psychology", "Engineering", "Mathematics", "Nursing", "Arts & Humanities", "Business", "Economics", "Management", "Law", "Education", "Open Access"],
    link: "https://www.sciencedirect.com/browse/journals-and-books?accessType=openAccess&contentType=JL"
  },
  {
    id: 690,
    title: "Science Partner Journals (Open Access)",
    publisher: "American Association for the Advancement of Science",
    description: "Features 17 high-quality, editorially independent open-access scientific journals published in partnership with leading global institutions under AAAS.",
    subjects: ["Business", "Social Science", "Data Analytics", "Cybersecurity", "Psychology", "Criminology", "Economics", "Medicine", "Health & Science", "Engineering", "Computer Science"],
    link: "https://spj.science.org/"
  },
  {
    id: 394,
    title: "Semantic Scholar",
    publisher: "Semantic Scholar",
    description: "An AI-powered academic search engine indexing over 200 million papers. Users can search and filter for legally available open access records.",
    subjects: ["Open Access", "Database", "Computer Science", "Science", "Data Science", "Medicine", "Health & Science", "Engineering", "Technology", "Education", "Criminology", "Psychology"],
    link: "https://www.semanticscholar.org/about"
  },
  {
    id: 370,
    title: "SocArXiv",
    publisher: "SocArXiv",
    description: "A free, non-profit open-access platform for the social sciences, hosting over 16,000 working papers, preprints, and fully published research.",
    subjects: ["Open Access", "Database", "Law", "Social Science", "Education", "EResource", "Arts & Humanities", "Psychology", "Computer Science", "Engineering", "Technology", "Language", "Care"],
    link: "https://osf.io/preprints/socarxiv"
  },
  {
    id: 552,
    title: "Springer Nature (Open Access)",
    publisher: "Springer Nature",
    description: "A leading international publisher hosting nearly 2 million open-access resources, including books, peer-reviewed journals, and textbook materials.",
    subjects: ["Business", "Economics", "Data Analytics", "Cybersecurity", "Computer Science", "Engineering", "Psychology", "Criminology", "Social Science", "Medicine", "Health & Science"],
    link: "https://link.springer.com/"
  },
  {
    id: 722,
    title: "SSRN",
    publisher: "Elsevier",
    description: "The Social Science Research Network is a leading repository for early-stage and published scholarly papers across law, economics, and business.",
    subjects: ["Business", "Economics", "Psychology", "Criminology", "Engineering", "Data Analytics", "Cybersecurity", "Medicine", "Health & Science", "Social Science", "Computer Science"],
    link: "https://www.ssrn.com/ssrn/"
  },
  {
    id: 303,
    title: "Taylor & Francis (Open Access Books)",
    publisher: "Taylor & Francis",
    description: "Offers over 5,000 peer-reviewed scholarly open access books and over 53,000 chapters across academic disciplines and research series.",
    subjects: ["Open Access", "Computer Science", "Business", "Social Science", "History", "Science", "Economics", "Law", "Language", "Education"],
    link: "https://www.taylorfrancis.com/"
  },
  {
    id: 724,
    title: "Taylor and Francis (Open Access Journals)",
    publisher: "Taylor & Francis",
    description: "Provides access to gold and hybrid peer-reviewed journals, with more than 360 fully open-access journals and thousands of individual open articles.",
    subjects: ["Business", "Data Analytics", "Cybersecurity", "Economics", "Social Care", "Engineering", "Psychology", "Criminology", "Medicine", "Health & Science"],
    link: "https://www.tandfonline.com/"
  },
  {
    id: 1198,
    title: "Test Database",
    publisher: "City Library Systems",
    description: "An internal evaluation record used for verifying secure database discovery and routing across multi-disciplinary open access repositories.",
    subjects: ["Open Access", "Database", "Science", "Computer Science"],
    link: "https://www.taylorfrancis.com/"
  },
  {
    id: 371,
    title: "UnPaywall",
    publisher: "UnPaywall",
    description: "An open database of more than 54 million legal open-access scholarly articles, harvesting content from over 50,000 publishers and repositories.",
    subjects: ["Open Access", "EResource", "Database", "Browser Extension"],
    link: "https://unpaywall.org/"
  },
  {
    id: 495,
    title: "The WAC Clearinghouse",
    publisher: "The WAC Clearinghouse",
    description: "An open-access publishing collaborative offering over 240 peer-reviewed books, journals, and articles focusing on teaching, writing, and linguistics.",
    subjects: ["Open Access", "EResource", "Language", "Education", "Teaching"],
    link: "https://wacclearinghouse.org/"
  },
  {
    id: 913,
    title: "Wiley (Open Access Journals)",
    publisher: "Wiley",
    description: "A prestigious collection of over 600 fully gold open-access journals publishing high-impact peer-reviewed research across all major fields.",
    subjects: ["Business", "Economics", "Data Analytics", "Computer Science", "Cybersecurity", "Criminology", "Psychology", "Engineering", "Medicine", "Health & Science"],
    link: "https://onlinelibrary.wiley.com/"
  }
];
