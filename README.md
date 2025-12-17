
  # Municipality Election Guide
  
  This website was built for the purpose of a Science Communication Product Development course, and aims to explain the ways in which "restzetels" or remained seats are distributed after an election. The goal was to create a working prototype, which we have achieved. Hopefully, we can realize a new goal, to have it completely ready and up to date for the municipality elections on March 2026.

  If you want to add or update the website, feel free to contribute.

  If you downloaded the folders and want to edit them, first perform 'npm i' to get all of the required dependencies. If you want to make changes, you can ofcourse do a Git push/merge. However, to actually change the website, you need to change the docs folder. Just do 'npm run dev' in teh overall folder, and place the files you create in build in the folder named docs. Remove the old build folder and the contents of the docs folder

  Altough most of the files here are required, some might be redundant. Altough the website size isnt really a big issue, it might be usefull to remove redundant files for clearity.

  ## New municipality elections
  
  Be carefull when updating the data for the upcoming municipality elections. Between municipality elections, the municipality borders are sometimes redrawn and municipalities can be merged. If this happens, you can change the relevant SVG data in the file NetherlandsMap.tsx, which should speak for itself. SVG data is often available on websites of the dutch governement, like the CBS. You must also update the GM codes of municipality names in the municipalitySVGParser.ts file.
  
  To add the voting data of new municipality elections, I recommend downloading all of the election results as a csv file. You will need to add this data to the file municipalities.ts, in the same format as all of the other municipalities. It is easiest to write a quick script to go through all of that data, which shouldnt be to difficult to do. To the municipalities.ts you will only need to give the correct municipality name, number of inhabitants, turnout, parties and how many votes they got. You can leave the amount of seats per municipality empy, as well as the ampount of seats per party on 0. These are automatically calculated. 

  If you want the data from multiple elections to be shown on the site, this should not be too difficult to implement. You could create multiple NetherlandsMap.tsx files, all with the correct svg data of a certain year, and do the same for municipalities.ts and municipalitySVGParser.ts. Then, edit the file MunicipalityTool.tsx so it allows users to select different years, and use the different data. The file SeatCalculator.tsx should be usable for all election years. 

  ## New national and European elections

  Editing the national and European election results is easier. The results are hardcoded into NationalElections.tsc and EuropeanElections.tsx . Just edit the const nationalElectionResults and europeanElectionResults. No map is shown, so no changes to any map are needed here. Adding multiple elections to the website could most likely be done by copying nationalElectionResults and europeanElectionResults for different years and adding/incorporating a button to change different years.
  
  ## Further information

  The framework of this website was made in figma, but most of the texts and a large part of the code have since then been rewritten. 
  
  If you want to reuse (parts of) this website, feel free to do so, as long as you cite the creators of the website (Eszter Nagy, Floris Löffler, Igor van der Meulen, Lucy van Staalduine en Teun Grimbergen) and keep any products affiliated, influenced, derived from or otherwise affected by this website open-source and free off charge/free to use. For the exact details, which should be taken in addition to what I said in this file and trump it in the case of any contradictions, see the [LICENSE](LICENSE).

  Licensing
---------

  This software is licensed under the terms of the [GNU Lesser General Public License](https://opensource.org/license/lgpl-3-0). See [LICENSE](LICENSE).
  