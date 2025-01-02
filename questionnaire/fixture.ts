export const data = {
  layout: {
    components: [
      {
        metadata: {
          name: "header",
        },
        props: {
          poweredBySb: false,
          url: "https://www.simplybusiness.co.uk",
          phoneNumber: "0333 014 6683",
          openingHours: [
            {
              day: "Mon",
              hours: "9.00am-5.30pm",
            },
            {
              day: "Tue",
              hours: "9.00am-5.30pm",
            },
            {
              day: "Wed",
              hours: "9.00am-5.30pm",
            },
            {
              day: "Thu",
              hours: "9.30am-5.30pm",
            },
            {
              day: "Fri",
              hours: "9.00am-5.30pm",
            },
            {
              day: "Sat",
              hours: "9.00am-2.00pm",
            },
            {
              day: "Sun",
              hours: "Closed",
            },
          ],
          openingHoursLabel: "See our opening hours",
        },
      },
      {
        metadata: {
          name: "footer",
        },
        props: {
          phoneNumber: "0333 014 6683",
          openingHours: [
            {
              day: "Mon",
              hours: "9.00am-5.30pm",
            },
            {
              day: "Tue",
              hours: "9.00am-5.30pm",
            },
            {
              day: "Wed",
              hours: "9.00am-5.30pm",
            },
            {
              day: "Thu",
              hours: "9.30am-5.30pm",
            },
            {
              day: "Fri",
              hours: "9.00am-5.30pm",
            },
            {
              day: "Sat",
              hours: "9.00am-2.00pm",
            },
            {
              day: "Sun",
              hours: "Closed",
            },
          ],
          addresses: [
            ["6th Floor", "99 Gresham Street", "London", "EC2V 7NG"],
            ["Northampton 900", "900 Pavilion Drive", "Northampton", "NN4 7RG"],
          ],
          legalLinks: [
            {
              href: "https://www.simplybusiness.co.uk/terms-conditions/",
              text: "Terms & conditions",
            },
            {
              href: "https://www.simplybusiness.co.uk/privacy-policy/",
              text: "Privacy policy",
            },
            {
              href: "https://www.simplybusiness.co.uk/legal/cookies/",
              text: "Cookie policy",
            },
            {
              href: "https://www.simplybusiness.co.uk/support/accessibility/",
              text: "Accessibility",
            },
          ],
          smallPrint:
            "&copy; 2024 Simply Business. All Rights Reserved. Simply Business is a trading name of Xbridge Limited which is authorised and regulated by the Financial Conduct Authority (Financial Services Registration No: 313348). Xbridge Limited (No: 3967717) has its registered office at 6th Floor, 99 Gresham Street, London, EC2V 7NG.",
        },
      },
      {
        metadata: {
          name: "questionnaire",
        },
        props: {
          config: {
            businessUnit: "simplybusiness",
            externalTracking: {
              tracking_id: "000-000-000-000",
              tracking_id_type: "duid",
            },
            questionnaire: {
              name: "Landlord Quick Quote",
              tags: {},
              version: "1",
            },
            quotingOperation: "new_business",
            serviceChannelIdentifier: "simplybusiness",
            source: "quick_quote_experiment",
            vertical: "landlord",
          },
          sections: [
            {
              title: "Compare quotes from trusted landlord brands",
              questions: [
                {
                  id: "landlord_type",
                  name: "Landlord type",
                  primaryText:
                    "How would you describe the tenants you usually let this property to?",
                  required: true,
                  options: [
                    {
                      value: "residential",
                      label: "Residential",
                    },
                    {
                      value: "commercial",
                      label: "Commercial",
                    },
                    {
                      value: "mixed",
                      label: "Both residential and commercial",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  helpInfo: {
                    label: "Need help",
                    text: "<p><h3>Commercial</h3></p>\n\n      <p>Choose commercial if your tenants use your property as their business premises.</p>\n\n      <p><h3>For example</h3></p>\n\n      <p>You own the building that your tenants use to run their coffee shop from.</p>\n\n      <p><h3>Residential and commercial</h3></p>\n\n      <p>Choose residential and commercial if your property is used as both a business and a place for your tenants to live in.</p>\n\n      <p><h3>For example</h3></p>\n\n      <p>The ground floor is used as a shop, but the first floor is a flat.</p>",
                    headline: "Type of tenants in the property",
                  },
                  visible: true,
                  trackAs: "primary_detail_selected",
                },
              ],
              preambleName: "landlord_insurer_logos",
              postamble:
                "Make sure you answer honestly, with accurate and up-to-date information. If you don't, your policy may be cancelled, and your insurer could reject your claim or decide not to pay it in full.<br><br>You will not receive advice or a recommendation from us. However, we may ask you certain questions so that we can narrow down the selection of insurance products we make available to you. As we provide information only, you will need to make your own choice about which insurance policy to buy.",
            },
            {
              title: "Property Address",
              questions: [
                {
                  id: "uk_address_lookup",
                  name: "UK address lookup",
                  primaryText:
                    "What is the address of the property you want to insure?",
                  required: true,
                  display: {
                    type: "address_lookup",
                    config: {
                      component: "loquate",
                      apiKey: "api_key",
                      mappedFields: [
                        {
                          id: "Address 1",
                          required: true,
                        },
                        {
                          id: "Town",
                          required: true,
                        },
                        {
                          id: "Uk postcode",
                          required: true,
                        },
                        {
                          id: "Address 2",
                          required: false,
                        },
                      ],
                    },
                  },
                  visible: true,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "Let's get some quick details on your property",
              questions: [
                {
                  id: "property_type",
                  name: "Property type",
                  primaryText: "What's your residential property type?",
                  required: true,
                  options: [
                    {
                      value: "Terraced / End terrace house",
                      label: "Terraced / End terrace house",
                    },
                    {
                      value: "Semi-detached house",
                      label: "Semi-detached house",
                    },
                    {
                      value: "Detached house",
                      label: "Detached house",
                    },
                    {
                      value: "Bungalow",
                      label: "Bungalow",
                    },
                    {
                      value: "Maisonette",
                      label: "Maisonette",
                    },
                    {
                      value:
                        "Individual flat - in purpose built block or building",
                      label:
                        "Individual flat - in purpose built block or building",
                    },
                    {
                      value: "Individual flat - in converted building or house",
                      label: "Individual flat - in converted building or house",
                    },
                    {
                      value:
                        "Entire building with multiple flats - purpose built",
                      label:
                        "Entire building with multiple flats - purpose built",
                    },
                    {
                      value:
                        "Entire building with multiple flats - converted building or house",
                      label:
                        "Entire building with multiple flats - converted building or house",
                    },
                    {
                      value: "Other",
                      label: "Other",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  helpInfo: {
                    label: "Need help",
                    text: "<p>Fixtures and fittings are things that you would normally leave behind if you sold the property, such as fitted kitchens, bathrooms, or wardrobes.</p>\n       <p>If you own the building and want to insure it, or have to arrange buildings insurance due to a legal requirement, please select buildings.</p>",
                    headline: "Residential property type",
                  },
                  placeholder: "Select property type",
                  visible: true,
                  shouldUpdate: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "sof_number_of_bedrooms",
                  name: "Number of bedrooms online",
                  primaryText: "How many bedrooms does your property have?",
                  required: true,
                  options: [
                    {
                      value: "1",
                      label: "1",
                    },
                    {
                      value: "2",
                      label: "2",
                    },
                    {
                      value: "3",
                      label: "3",
                    },
                    {
                      value: "4",
                      label: "4",
                    },
                    {
                      value: "5",
                      label: "5",
                    },
                    {
                      value: "6",
                      label: "6",
                    },
                    {
                      value: "7",
                      label: "7",
                    },
                    {
                      value: "8",
                      label: "8",
                    },
                    {
                      value: "9",
                      label: "9",
                    },
                    {
                      value: "10 or more",
                      label: "10 or more",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  placeholder: "Select number of bedrooms",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "sof_number_of_bathrooms",
                  name: "Number of bathrooms online",
                  primaryText: "How many bathrooms does your property have?",
                  required: true,
                  options: [
                    {
                      value: "1",
                      label: "1",
                    },
                    {
                      value: "2",
                      label: "2",
                    },
                    {
                      value: "3",
                      label: "3",
                    },
                    {
                      value: "4",
                      label: "4",
                    },
                    {
                      value: "5",
                      label: "5",
                    },
                    {
                      value: "6",
                      label: "6",
                    },
                    {
                      value: "7",
                      label: "7",
                    },
                    {
                      value: "8",
                      label: "8",
                    },
                    {
                      value: "9",
                      label: "9",
                    },
                    {
                      value: "10 or more",
                      label: "10 or more",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  placeholder: "Select number of bathrooms",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "property_age",
                  name: "Property age",
                  primaryText: "When was the property built?",
                  required: true,
                  options: [
                    {
                      value: "Before 1850",
                      label: "Before 1850",
                    },
                    {
                      value: "Between 1850 and 1899",
                      label: "Between 1850 and 1899",
                    },
                    {
                      value: "Between 1900 and 1920",
                      label: "Between 1900 and 1920",
                    },
                    {
                      value: "Between 1921 and 1944",
                      label: "Between 1921 and 1944",
                    },
                    {
                      value: "Between 1945 and 1979",
                      label: "Between 1945 and 1979",
                    },
                    {
                      value: "Between 1980 and 1989",
                      label: "Between 1980 and 1989",
                    },
                    {
                      value: "Between 1990 and 2000",
                      label: "Between 1990 and 2000",
                    },
                    {
                      value: "After 2000",
                      label: "After 2000",
                    },
                    {
                      value: "I don't know",
                      label: "I don't know",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  placeholder: "Select year",
                  visible: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "sof_listed_building",
                  name: "SoF listed building (England and Wales)",
                  primaryText: "The property is not listed.",
                  required: true,
                  options: [
                    {
                      value: "yes",
                      label: "I agree",
                    },
                    {
                      value: "no",
                      label: "I disagree",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  visible: false,
                  shouldUpdate: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "sof_listed_building",
                  name: "SoF listed building (Scotland)",
                  primaryText: "The property is not listed.",
                  required: true,
                  options: [
                    {
                      value: "yes",
                      label: "I agree",
                    },
                    {
                      value: "no",
                      label: "I disagree",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  visible: false,
                  shouldUpdate: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "sof_listed_building",
                  name: "SoF listed building (Northern Ireland)",
                  primaryText: "The property is not listed.",
                  required: true,
                  options: [
                    {
                      value: "yes",
                      label: "I agree",
                    },
                    {
                      value: "no",
                      label: "I disagree",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  visible: false,
                  shouldUpdate: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "property_listing_category",
                  name: "Property listing category (England and Wales)",
                  primaryText: "The listing category of the property is:",
                  required: true,
                  options: [
                    {
                      value: "Grade I (England and Wales)",
                      label: "Grade I",
                    },
                    {
                      value: "Grade II* (England and Wales)",
                      label: "Grade II*",
                    },
                    {
                      value: "Grade II (England and Wales)",
                      label: "Grade II",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "property_listing_category",
                  name: "Property listing category (Scotland)",
                  primaryText: "The listing category of the property is:",
                  required: true,
                  options: [
                    {
                      value: "Grade A (Scotland)",
                      label: "Grade A",
                    },
                    {
                      value: "Grade B (Scotland)",
                      label: "Grade B",
                    },
                    {
                      value: "Grade C (Scotland)",
                      label: "Grade C",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "property_listing_category",
                  name: "Property listing category (Northern Ireland)",
                  primaryText: "The listing category of the property is:",
                  required: true,
                  options: [
                    {
                      value: "Grade A (Northern Ireland)",
                      label: "Grade A",
                    },
                    {
                      value: "Grade B+ (Northern Ireland)",
                      label: "Grade B+",
                    },
                    {
                      value: "Grade B (Northern Ireland)",
                      label: "Grade B",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "",
              questions: [
                {
                  id: "years_owned",
                  name: "Years owned",
                  primaryText: "How long have you owned this property for?",
                  required: true,
                  options: [
                    {
                      value: "Less than 1 year",
                      label: "Less than 1 year",
                    },
                    {
                      value: "1-2 years",
                      label: "1-2 years",
                    },
                    {
                      value: "2-3 years",
                      label: "2-3 years",
                    },
                    {
                      value: "3-4 years",
                      label: "3-4 years",
                    },
                    {
                      value: "4-5 years",
                      label: "4-5 years",
                    },
                    {
                      value: "Over 5 years",
                      label: "Over 5 years",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  placeholder: "Select number of years",
                  visible: true,
                  shouldUpdate: true,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "Let's move on to your tenants",
              questions: [
                {
                  id: "tenant_type",
                  name: "Tenant type",
                  primaryText:
                    "Let's move on to your tenants - what type of tenants will live at this property?",
                  secondaryText:
                    "Choose a description that covers all of the adults who will be living in your property, not just the tenant(s) named on the rental agreement. Anyone who works more than 16 hours a week should be described as 'employed'.",
                  required: true,
                  options: [
                    {
                      value: "Employed / Self-employed",
                      label: "Employed / Self-employed",
                    },
                    {
                      value: "Unemployed / DSS",
                      label: "Unemployed / DSS",
                    },
                    {
                      value: "Retired",
                      label: "Retired",
                    },
                    {
                      value: "Students",
                      label: "Students",
                    },
                    {
                      value: "Local authority referrals",
                      label: "Local authority referrals",
                    },
                    {
                      value: "Asylum seekers",
                      label: "Asylum seekers",
                    },
                    {
                      value:
                        "Mixed tenants - employed / self-employed and unemployed",
                      label:
                        "Mixed tenants - employed / self-employed and unemployed",
                    },
                    {
                      value:
                        "Mixed tenants - employed / self-employed and retired",
                      label:
                        "Mixed tenants - employed / self-employed and retired",
                    },
                    {
                      value:
                        "Mixed tenants - employed / self-employed and students",
                      label:
                        "Mixed tenants - employed / self-employed and students",
                    },
                    {
                      value:
                        "Mixed tenants - other combination of the tenants listed above",
                      label:
                        "Mixed tenants - other combination of the tenants listed above",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "",
              questions: [
                {
                  id: "sof_background_checks_activities",
                  name: "SoF background checks activities",
                  primaryText: "Select which checks are carried out:",
                  required: true,
                  options: [
                    {
                      value: "Background and identity checks",
                      label: "Background and identity checks",
                    },
                    {
                      value: "Independent references obtained",
                      label: "Independent references obtained",
                    },
                    {
                      value:
                        "Credit checks on prospective tenants or their guarantor",
                      label:
                        "Credit checks on prospective tenants or their guarantor",
                    },
                    {
                      value: "Other",
                      label: "Other",
                    },
                  ],
                  display: {
                    type: "multiselect",
                    config: {
                      lastItemDisables: true,
                    },
                  },
                  visible: false,
                  shouldUpdate: true,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "One last thing before you select your covers",
              questions: [
                {
                  id: "customer[title]",
                  name: "Customer title",
                  primaryText: "Title",
                  required: true,
                  placeholder: "Please select",
                  options: [
                    {
                      value: "Mr",
                      label: "Mr",
                    },
                    {
                      value: "Mrs",
                      label: "Mrs",
                    },
                    {
                      value: "Miss",
                      label: "Miss",
                    },
                    {
                      value: "Ms",
                      label: "Ms",
                    },
                    {
                      value: "Dr",
                      label: "Dr",
                    },
                    {
                      value: "Mx",
                      label: "Mx",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  visible: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "customer[first_name]",
                  name: "Customer first name",
                  primaryText: "First name",
                  required: true,
                  display: {
                    type: "text",
                  },
                  visible: true,
                  trackAs: "form_question_answered",
                  autocomplete: "given-name",
                },
                {
                  id: "customer[last_name]",
                  name: "Customer last name",
                  primaryText: "Last name",
                  required: true,
                  display: {
                    type: "text",
                  },
                  visible: true,
                  trackAs: "form_question_answered",
                  autocomplete: "family-name",
                },
                {
                  id: "customer[email_address]",
                  name: "Customer email address",
                  primaryText: "Email address",
                  required: true,
                  display: {
                    type: "email",
                  },
                  visible: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "customer[telephone_number]",
                  name: "Customer telephone number",
                  primaryText: "Telephone number",
                  required: true,
                  display: {
                    type: "tel",
                  },
                  visible: true,
                  trackAs: "form_question_answered",
                },
              ],
              preamble:
                "<ul><li>Rent Guarantee cover up to £100,000 or up to 12 months</li><li>Building insurance upto £600,000 as standard</li><li>Free legal and tax advice with legal cover</li></ul>",
              postamble:
                "We collect and use relevent information about you to provide you with your insurance, and to meet our legal obligations. By providing us with your details you confirm that you agree with our <a href='https://www.simplybusiness.co.uk/terms-conditions'>terms and conditions</a> and that you have read our <a href='https://www.simplybusiness.co.uk/privacy-policy'>privacy policy</a> which effectively replaces the first and third paragraph of what is there currently and we dont need to show it on any page until the PII questions.",
              shouldUpdate: true,
            },
            {
              title: "",
              questions: [
                {
                  id: "same_correspondence_address",
                  name: "Same correspondence address pre quote",
                  primaryText:
                    "Is your correspondence address the same as the property you want to insure?",
                  shouldUpdate: true,
                  required: false,
                  options: [
                    {
                      value: "yes",
                      label: "Yes",
                    },
                    {
                      value: "no",
                      label: "No",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  visible: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "uk_correspondence_address_lookup",
                  name: "UK correspondence address lookup",
                  primaryText: "Please enter your correspondence address",
                  visible: false,
                  required: true,
                  display: {
                    type: "address_lookup",
                    config: {
                      component: "loquate",
                      apiKey: "api_key",
                      mappedFields: [
                        {
                          id: "Customer[address_1]",
                          required: true,
                        },
                        {
                          id: "Customer[town]",
                          required: true,
                        },
                        {
                          id: "Customer[uk_postcode]",
                          required: true,
                        },
                        {
                          id: "Customer[address_2]",
                          required: false,
                        },
                      ],
                    },
                  },
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title:
                "Now let's get you protected - you pick the covers, we'll show you prices from leading insurers",
              questions: [
                {
                  id: "fixtures_and_fittings_or_main_building_cover_selected",
                  name: "Fixtures and fittings or main building shared select",
                  primaryText: "Fixtures and fittings or buildings",
                  secondaryText:
                    "This can cover the cost of fixing or reinstalling fixtures and fittings if they are damaged by something like fire or flood. Gradual 'wear and tear' over time is not included.",
                  required: true,
                  options: [
                    {
                      value: "Fixtures and fittings",
                      label: "Include Landlords' fixtures & fittings cover",
                    },
                    {
                      value: "Main building",
                      label: "Include Buildings cover",
                    },
                    {
                      value: "None",
                      label: "Don't include either of these covers",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  helpInfo: {
                    label: "See what's covered",
                    text: "<p>Fixtures and fittings are things that you would normally leave behind if you sold the property, such as fitted kitchens, bathrooms, or wardrobes.</p>\n      <p>If you own the building and want to insure it, or have to arrange buildings insurance due to a legal requirement, please select this option.</p>",
                    headline: "Fixtures & fittings or building",
                  },
                  placeholder: "Please select",
                  visible: false,
                  shouldUpdate: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "fixtures_and_fittings_sum_insured",
                  name: "Fixtures and fittings",
                  primaryText: "Fixtures and fittings sum insured",
                  secondaryText:
                    "How much would it cost to replace all fixtures and fittings in the property? (i.e. fitted kitchens, bathrooms, cupboards).",
                  required: true,
                  answer: 0,
                  options: [
                    {
                      value: "2500",
                      label: "Less than £2,500",
                    },
                    {
                      value: "5000",
                      label: "£2,501 to £5,000",
                    },
                    {
                      value: "7500",
                      label: "£5,001 to £7,500",
                    },
                    {
                      value: "10000",
                      label: "£7,501 to £10,000",
                    },
                    {
                      value: "15000",
                      label: "£10,001 to £15,000",
                    },
                    {
                      value: "20000",
                      label: "£15,001 to £20,000",
                    },
                    {
                      value: "30000",
                      label: "£20,001 to £30,000",
                    },
                    {
                      value: "50000",
                      label: "£30,001 to £50,000",
                    },
                    {
                      value: "50001",
                      label: "Over £50,000",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  placeholder: "Select cost",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "buildings_sum_insured",
                  name: "Main building shared pre-pop",
                  primaryText: "Your estimated rebuild cost",
                  secondaryText:
                    "The rebuild cost is not the same as the market value.",
                  tertiaryText:
                    "<p>It's important to consider the cost of all aspects of a rebuild, for example:</p>\n    <ol>\n      <li>building materials, including all fixtures and fittings</li>\n      <li>surveyors, builders, and architect's fees and labour costs</li>\n      <li>plumbing and electrical fees</li>\n      <li>the cost of demolishing the building and removing the debris</li>\n    </ol>\n    <p>A recent surveyor's report may contain this information or you can use The Association of British Insurers rebuild cost calculator to get an estimate.</p>",
                  required: true,
                  display: {
                    type: "number",
                    config: {
                      wholeNumber: true,
                      prefix: "£",
                    },
                  },
                  placeholder: "Please enter your rebuild cost",
                  visible: false,
                  validation: {
                    type: "range",
                    message:
                      "The number must be between 20,000 and 100,000,000",
                    value: {
                      min: 20000,
                      max: 100000000,
                    },
                  },
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "",
              questions: [
                {
                  id: "contents_cover_selected",
                  name: "Contents select",
                  primaryText: "Contents",
                  secondaryText:
                    "Protection if the household items that you have provided for your tenants are damaged or destroyed.",
                  tertiaryText: "",
                  required: true,
                  options: [
                    {
                      value: "yes",
                      label: "Include this cover",
                    },
                    {
                      value: "no",
                      label: "Don't include this cover",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  helpInfo: {
                    label: "See what's covered",
                    text: "<p>This can cover the cost of replacing items that are stolen, or damaged by fire or flood. Gradual 'wear and tear' over time is not included</p>\n      <p>Contents that belong to the tenants are not covered by this policy; tenants need to take out their own contents insurance if they want to insure their own belongings</p>\n      <h2>For example</h2>\n      <p>Damage to soft furnishing, furniture, appliances and decorative items.</p>",
                    headline: "Contents",
                  },
                  placeholder: "Please select",
                  visible: true,
                  shouldUpdate: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "contents_sum_insured",
                  name: "Contents",
                  primaryText: "Contents sum insured",
                  secondaryText:
                    "How much would it cost to replace all of the household items you have provided for your tenants?",
                  required: true,
                  options: [
                    {
                      value: "2500",
                      label: "Less than £2,500",
                    },
                    {
                      value: "5000",
                      label: "£2,501 to £5,000",
                    },
                    {
                      value: "7500",
                      label: "£5,001 to £7,500",
                    },
                    {
                      value: "10000",
                      label: "£7,501 to £10,000",
                    },
                    {
                      value: "12500",
                      label: "£10,001 to £12,500",
                    },
                    {
                      value: "15000",
                      label: "£12,501 to £15,000",
                    },
                    {
                      value: "17500",
                      label: "£15,001 to £17,500",
                    },
                    {
                      value: "20000",
                      label: "£17,501 to £20,000",
                    },
                    {
                      value: "25000",
                      label: "£20,001 to £25,000",
                    },
                    {
                      value: "30000",
                      label: "£25,001 to £30,000",
                    },
                    {
                      value: "50000",
                      label: "£30,001 to £50,000",
                    },
                    {
                      value: "50001",
                      label: "Over £50,000",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                  helpInfo: {
                    label: "Need help?",
                    text: "<p>The amount you choose should represent the full value of all of the contents that you provide for your tenants. This should include things like furniture and appliances.</p>",
                    headline: "Contents sum insured",
                  },
                  placeholder: "Select cost",
                  visible: false,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "",
              questions: [
                {
                  id: "legal_expenses_sum_insured",
                  name: "Legal expenses",
                  primaryText: "Legal expenses",
                  secondaryText:
                    "<p>Provides professional advice and cover for expenses if you require legal assistance regarding your rental property. This includes up to £100,000 for legal fees, solicitors, or defence costs.</p>\n      <p>You'll also have access to a free, independent legal and tax helpline for extra support. If a claim arises, we'll provide specialists who will help you.</p>",
                  tertiaryText: "",
                  required: true,
                  options: [
                    {
                      value: "100000",
                      label: "£100,000",
                    },
                    {
                      value: "0",
                      label: "Not required",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  helpInfo: {
                    label: "See what's covered",
                    text: "<h3>What type of disputes are covered?</h3>\n      <ul>\n        <li>Repossession</li>\n        <li>Property damage</li>\n        <li>Eviction of tenants</li>\n        <li>Rent recovery</li>\n        <li>Tax protection</li>\n        <li>Contract disputes</li>\n      </ul>\n      <p>You can find the full list in your policy documents</p>\n      <h3>What free legal advice can I get?</h3>\n      <ul>\n        <li>Legal and tax advice</li>\n        <li>Legal documents, guides and templates</li>\n        <li>Counselling helpline</li>\n        <li>Cyber resolution service</li>\n      </ul>\n      <h3>For example</h3>\n      <p>Imagine your tenant has damaged your property, and you need to take them to court. We'd cover your legal costs and expenses up to £100,000.</p>",
                    headline: "Legal expenses",
                  },
                  visible: false,
                  shouldUpdate: true,
                  trackAs: "form_question_answered",
                },
                {
                  id: "tenant_default_sum_insured",
                  name: "Tenant default",
                  primaryText: "Tenant default",
                  secondaryText:
                    "<p>Covers up to £100,000 for missed payments while your tenant occupies your property.</p>\n      <p>This cover is also known as rent guarantee or rent protection.</p>",
                  required: true,
                  options: [
                    {
                      value: "1",
                      label: "Include this cover",
                    },
                    {
                      value: "0",
                      label: "Don't include this cover",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  helpInfo: {
                    label: "See what's covered",
                    text: "<h3>What do I need to file a claim?</h3>\n      <ul>\n        <li>Excess protection will payout for multiple excesses up to a total of £5,000 per year.</li>\n        <li>Applies to excesses for the covers you are buying with us today.</li>\n      </ul>\n      <h3>How long will you cover rent for?</h3>\n      <p>You will be covered for up to 12 months unpaid rent in total.</p>\n\n      <h3>Is there an excess to pay?</h3>\n      <p>There is no excess to pay so you will receive all of the arrears for any valid claims.</p>\n\n      <h3>What if my property needs repairs?</h3>\n      <p>If your property needs repairing before you re-let it, we'll pay 50% of your rent for up to three months, or until your property is re-let, whichever happens first.</p>\n\n      <h3>For example</h3>\n      <p>Imagine your tenant has not paid their £2,000 monthly rent for four months, but is still living in the property. We'd pay you the £8,000 they owe.</p>",
                    headline: "Tenant default",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "",
              questions: [
                {
                  id: "pl_cover_limit",
                  name: "Public liability",
                  primaryText: "Property owners' liability",
                  secondaryText:
                    "Protection if a tenant or visitor seeks compensation for injury, or for damage to their possessions, at your rental property",
                  tertiaryText: "",
                  required: true,
                  options: [
                    {
                      value: "2000000",
                      label: "£2,000,000",
                    },
                    {
                      value: "5000000",
                      label: "£5,000,000",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  helpInfo: {
                    label: "See what's covered",
                    text: "<p>As a landlord, you may be found at fault if a tenant or visitor is injured or their belongings are damaged at your rental property.</p>\n      <p>Compensation claims can be high, and you may also have to pay the other side's legal costs as well as your own.</p>\n\n      <h3>For example</h3>\n      <p>Someone trips on a loose piece of carpet on the stairs and is seriously injured</p>",
                    headline: "Property owners' liability",
                  },
                  placeholder: "Please select",
                  visible: true,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "",
              questions: [
                {
                  id: "accidental_damage_covered",
                  name: "Accidental damage for buildings",
                  primaryText: "Accidental damage (for Buildings)",
                  secondaryText:
                    "Protection if you, your tenants, or a visitor unintentionally damage the building",
                  required: true,
                  options: [
                    {
                      value: "I need this cover",
                      label: "Include this cover",
                    },
                    {
                      value: "I don't need this cover",
                      label: "Don't include this cover",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "accidental_damage_covered",
                  name: "Accidental damage for contents",
                  primaryText: "Accidental damage (for Contents)",
                  secondaryText:
                    "Protection if you, your tenants, or a visitor unintentionally damage contents you have provided",
                  tertiaryText:
                    "For example: Someone spills red wine on your sofa",
                  required: true,
                  options: [
                    {
                      value: "I need this cover",
                      label: "Include this cover",
                    },
                    {
                      value: "I don't need this cover",
                      label: "Don't include this cover",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "accidental_damage_covered",
                  name: "Accidental damage for fixtures and fittings",
                  primaryText: "Accidental damage (for Fixtures & fittings)",
                  secondaryText:
                    "Protection if you, your tenants, or a visitor unintentionally damage your fixtures and fittings",
                  tertiaryText:
                    "For example:  Someone burns the worktop with a hot pan",
                  required: true,
                  options: [
                    {
                      value: "I need this cover",
                      label: "Include this cover",
                    },
                    {
                      value: "I don't need this cover",
                      label: "Don't include this cover",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "accidental_damage_covered",
                  name: "Accidental damage for fixtures and fittings and contents",
                  primaryText: "Accidental damage",
                  secondaryText:
                    "<b>For fixtures and fittings and contents</b>\n      <p>Protection if you, your tenants, or a visitor unintentionally damage the contents you have provided, or the fixtures and fittings.</p>",
                  tertiaryText: "",
                  required: true,
                  options: [
                    {
                      value: "I need this cover",
                      label: "Include this cover",
                    },
                    {
                      value: "I don't need this cover",
                      label: "Don't include this cover",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  helpInfo: {
                    label: "See what's covered",
                    text: "<b>For fixtures and fittings and contents</b>\n      <p>This can cover the cost of replacing or repairing fixtures & fittings or contents if they are accidentally damaged by you, your tenants, or a visitor. Gradual 'wear and tear' over time is not included.</p>\n      <p>Contents include things such as furniture and appliances that you provide for your tenants. Fixtures and fittings are things that you would normally leave behind if you sold the property, such as fitted kitchens, bathrooms, or wardrobes, or hardwood flooring.</p>\n      <p>This cover can be important even if you have taken a damage deposit from your tenants, as the cost of repair could be higher than the value of the damage deposit, and you may not be able to access this money until the tenants leave.</p>\n      <h3>For example</h3>\n      <p>Someone burns the worktop with a hot pan or spills red wine on your sofa.</p>",
                    headline: "Accidental damage",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "accidental_damage_covered",
                  name: "Accidental damage for buildings and contents",
                  primaryText: "Accidental damage (for Buildings and Contents)",
                  secondaryText:
                    "Protection if you, your tenants, or a visitor unintentionally damage the contents you have provided for your tenants, or the building",
                  tertiaryText:
                    "For example:  Someone damages a wall while putting up shelves or spills red wine on your sofa",
                  required: true,
                  options: [
                    {
                      value: "I need this cover",
                      label: "Include this cover",
                    },
                    {
                      value: "I don't need this cover",
                      label: "Don't include this cover",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
                {
                  id: "accidental_damage_not_available",
                  name: "Accidental damage not available",
                  primaryText: "Accidental damage",
                  secondaryText: "Accidental damage cover is not available",
                  required: false,
                  display: {
                    type: "info",
                  },
                  visible: false,
                },
              ],
            },
            {
              title: "",
              questions: [
                {
                  id: "home_emergency_cover_selected",
                  name: "Home emergency",
                  primaryText: "Home emergency cover",
                  secondaryText:
                    "This cover provides 24/7 assistance in the event of emergencies. We'll arrange and pay for a contractor to make your property secure again and prevent further damage.",
                  required: true,
                  options: [
                    {
                      value: "1",
                      label: "Include this cover",
                    },
                    {
                      value: "0",
                      label: "Don't include this cover",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  helpInfo: {
                    label: "See what's covered",
                    text: "<h3>What emergencies are covered?</h3>\n      <ul>\n        <li>Plumbing and drainage</li>\n        <li>Boiler and heating breakdowns</li>\n        <li>Gas and electrical power supply failure</li>\n        <li>Home security, loss and theft of keys</li>\n      </ul>\n      <p>You can find the full details in your policy documents.</p>\n\n      <h3>Who can make a claim?</h3>\n      <p>Claims can be submitted by you, your tenants within the let property, or by any business that is acting for you, such as a letting agent or property management company.</p>\n\n      <h3>How many claims can I make?</h3>\n      <p>There is no limit on the number of claims you can make under this cover.</p>\n\n      <h3>For example</h3>\n      <p>Imagine there is a water leak at your rental property, we'd send a contractor to fix it, cover the costs, and reimburse you £300 for a hotel if your tenants cannot stay there overnight.</p>",
                    headline: "Home emergency cover",
                  },
                  placeholder: "Please select",
                  visible: false,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title: "",
              questions: [
                {
                  id: "excess_sum_insured",
                  name: "Excess sum insured",
                  primaryText: "Excess protection",
                  secondaryText:
                    "<p>Cover to reimburse your excess if you make an eligible claim on your policy:</p>\n    <ul>\n        <li>£5,000 cover per year</li>\n        <li>No limit on number of claims</li>\n        <li>Covers standard and non-standard excesses</li>\n    </ul>",
                  required: true,
                  options: [
                    {
                      value: "5000",
                      label: "Include this cover",
                    },
                    {
                      value: "0",
                      label: "Don't include this cover",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                  visible: true,
                  trackAs: "form_question_answered",
                },
              ],
            },
            {
              title:
                "You're on the last step! Based on your responses, we've prefilled the rest of the questions",
              displayAs: "review",
              preamble:
                "Internal and 3rd party data has been used to assume information about you and your property. To get the right insurance coverages, we require accurate information.\n Please review the pre-filled fields and make any necessary changes. Contact us for questions or assistance.\n <br/>\n <b>It is your responsibility to ensure the information is correct, please edit and change if its incorrect.</b>\n ",
              postamble:
                "By continuing, you agree that the above statements are up to date and correct to the best of your knowledge.",
              questions: [
                {
                  id: "uk_address_lookup",
                  name: "UK address lookup",
                  primaryText:
                    "What is the address of the property you want to insure?",
                  presentationText: "Your rental property address is ${answer}",
                  presentationGroup: "About your property",
                  visible: true,
                  required: true,
                  display: {
                    type: "address_lookup",
                    config: {
                      apiKey: "",
                      component: "loquate",
                      mappedFields: [
                        {
                          id: "Address 1",
                          required: true,
                        },
                        {
                          id: "Town",
                          required: true,
                        },
                        {
                          id: "Uk postcode",
                          required: true,
                        },
                        {
                          id: "Address 2",
                          required: false,
                        },
                      ],
                    },
                  },
                },
                {
                  id: "property_type",
                  name: "Property type",
                  primaryText: "What's your residential property type?",
                  presentationText: "Your property is an ${answer}",
                  presentationGroup: "About your property",
                  placeholder: "Select property type",
                  shouldUpdate: true,
                  helpInfo: {
                    label: "Need help",
                    text: "<p>Fixtures and fittings are things that you would normally leave behind if you sold the property, such as fitted kitchens, bathrooms, or wardrobes.</p>\n <p>If you own the building and want to insure it, or have to arrange buildings insurance due to a legal requirement, please select buildings.</p>",
                    headline: "Residential property type",
                  },
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "Terraced / End terrace house",
                      value: "Terraced / End terrace house",
                    },
                    {
                      label: "Semi-detached house",
                      value: "Semi-detached house",
                    },
                    {
                      label: "Detached house",
                      value: "Detached house",
                    },
                    {
                      label: "Bungalow",
                      value: "Bungalow",
                    },
                    {
                      label: "Maisonette",
                      value: "Maisonette",
                    },
                    {
                      label:
                        "Individual flat - in purpose built block or building",
                      value:
                        "Individual flat - in purpose built block or building",
                    },
                    {
                      label: "Individual flat - in converted building or house",
                      value: "Individual flat - in converted building or house",
                    },
                    {
                      label:
                        "Entire building with multiple flats - purpose built",
                      value:
                        "Entire building with multiple flats - purpose built",
                    },
                    {
                      label:
                        "Entire building with multiple flats - converted building or house",
                      value:
                        "Entire building with multiple flats - converted building or house",
                    },
                    {
                      label: "Other",
                      value: "Other",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                },
                {
                  id: "sof_number_of_bedrooms",
                  name: "Number of bedrooms online",
                  primaryText: "How many bedrooms does your property have?",
                  presentationText: "It has ${answer}",
                  presentationGroup: "About your property",
                  placeholder: "Select number of bedrooms",
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "1",
                      value: "1",
                    },
                    {
                      label: "2",
                      value: "2",
                    },
                    {
                      label: "3",
                      value: "3",
                    },
                    {
                      label: "4",
                      value: "4",
                    },
                    {
                      label: "5",
                      value: "5",
                    },
                    {
                      label: "6",
                      value: "6",
                    },
                    {
                      label: "7",
                      value: "7",
                    },
                    {
                      label: "8",
                      value: "8",
                    },
                    {
                      label: "9",
                      value: "9",
                    },
                    {
                      label: "10 or more",
                      value: "10 or more",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                },
                {
                  id: "sof_number_of_bathrooms",
                  name: "Number of bathrooms online",
                  primaryText: "How many bathrooms does your property have?",
                  presentationText: "It has ${answer}",
                  presentationGroup: "About your property",
                  placeholder: "Select number of bathrooms",
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "1",
                      value: "1",
                    },
                    {
                      label: "2",
                      value: "2",
                    },
                    {
                      label: "3",
                      value: "3",
                    },
                    {
                      label: "4",
                      value: "4",
                    },
                    {
                      label: "5",
                      value: "5",
                    },
                    {
                      label: "6",
                      value: "6",
                    },
                    {
                      label: "7",
                      value: "7",
                    },
                    {
                      label: "8",
                      value: "8",
                    },
                    {
                      label: "9",
                      value: "9",
                    },
                    {
                      label: "10 or more",
                      value: "10 or more",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                },
                {
                  id: "property_age",
                  name: "Property age",
                  primaryText: "When was the property built?",
                  presentationText: "It was built ${answer}",
                  presentationGroup: "About your property",
                  placeholder: "Select year",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "Before 1850",
                      value: "Before 1850",
                    },
                    {
                      label: "Between 1850 and 1899",
                      value: "Between 1850 and 1899",
                    },
                    {
                      label: "Between 1900 and 1920",
                      value: "Between 1900 and 1920",
                    },
                    {
                      label: "Between 1921 and 1944",
                      value: "Between 1921 and 1944",
                    },
                    {
                      label: "Between 1945 and 1979",
                      value: "Between 1945 and 1979",
                    },
                    {
                      label: "Between 1980 and 1989",
                      value: "Between 1980 and 1989",
                    },
                    {
                      label: "Between 1990 and 2000",
                      value: "Between 1990 and 2000",
                    },
                    {
                      label: "After 2000",
                      value: "After 2000",
                    },
                    {
                      label: "I don't know",
                      value: "I don't know",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                },
                {
                  id: "sof_listed_building",
                  name: "SoF listed building (England and Wales)",
                  primaryText: "The property is not listed.",
                  presentationText: "${answer} the property is not listed",
                  presentationGroup: "About your property",
                  shouldUpdate: true,
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_listed_building",
                  name: "SoF listed building (Scotland)",
                  primaryText: "The property is not listed.",
                  presentationText: "${answer} the property is not listed",
                  presentationGroup: "About your property",
                  shouldUpdate: true,
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_listed_building",
                  name: "SoF listed building (Northern Ireland)",
                  primaryText: "The property is not listed.",
                  presentationText: "${answer} the property is not listed",
                  presentationGroup: "About your property",
                  shouldUpdate: true,
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_property_owners_residency",
                  name: "SoF property owners residency online",
                  primaryText:
                    "At least one of the property owners is a UK resident or a UK-registered company",
                  presentationText:
                    "<b>I agree</b> at least one of the property owners is a UK resident or a UK-registered company",
                  presentationGroup: "About your property",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                },
                {
                  id: "sof_property_construction",
                  name: "SoF property construction",
                  primaryText:
                    "The building is of standard construction. This means it has:\n <ul>\n <li>brick, stone or concrete walls</li>\n <li>timber or concrete floors</li>\n <li>a slate, tile or concrete roof</li>\n </ul>",
                  presentationText:
                    " <b>I agree</b> that the building is of standard construction. This means it has: <ul> <li>brick, stone or concrete walls</li> <li>timber or concrete floors</li> <li>a slate, tile or concrete roof</li> </ul> ",
                  presentationGroup: "About your property",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_good_state_of_repair",
                  name: "SoF good state of repair",
                  primaryText:
                    "My property is in a good state of repair. This means:\n <ul>\n <li>it is structurally sound</li>\n <li>there is no evidence of rot, damp, or infestation</li>\n <li>there is no faulty wiring or plumbing</li>\n <li>there is no damage to the roof or chimney</li>\n </ul>",
                  presentationText:
                    " <b>I agree</b> that the property is in a good state of repair. This means: <ul> <li>it is structurally sound</li> <li>there is no evidence of rot, damp, or infestation</li> <li>there is no faulty wiring or plumbing</li> <li>there is no damage to the roof or chimney</li> </ul> ",
                  presentationGroup: "About your property",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_renovation_works",
                  name: "SoF renovation works",
                  primaryText: "There is no building work in progress",
                  presentationText:
                    "<b>I agree</b> that there is no building work in progress",
                  presentationGroup: "About your property",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_flood",
                  name: "SoF flood",
                  primaryText: "My property has never been flooded",
                  presentationText:
                    "<b>I agree</b> the property has never been flooded",
                  presentationGroup: "About your property",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_subsidence",
                  name: "SoF subsidence",
                  primaryText:
                    "My property:\n <ul>\n <li>doesn't have a history - or show signs of - subsidence, landslip, or ground heave</li>\n <li>isn't built on low lying land that has previously been filled or raised (known as 'made up ground')</li>\n <li>isn't above underground workings (for example, tunnelling or mining)</li>\n </ul>",
                  presentationText:
                    " <b>I agree</b> that the property: <ul> <li>doesn't have a history - or show signs of - subsidence, landslip, or ground heave</li> <li>isn't built on low lying land that has previously been filled or raised (known as 'made up ground')</li> <li>isn't above underground workings (for example, tunnelling or mining)</li> </ul> ",
                  presentationGroup: "About your property",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_sloping_roof",
                  name: "SoF sloping roof",
                  primaryText:
                    "No more than 25% of the total roof area is flat.",
                  presentationText:
                    "<b>I agree</b> that no more than 25% of the total roof area is flat.",
                  presentationGroup: "About your property",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_door_locks",
                  name: "SoF door locks",
                  primaryText:
                    "All main exit doors have at least one of these locks:\n <ul>\n <li>a mortice deadlock</li>\n <li>a mortice deadlock conforming to BS3621</li>\n <li>a key-operated multipoint lock</li>\n <li>a rim automatic deadlatch with key-locking handle</li>\n </ul>",
                  secondaryText:
                    "<div class='control radio-buttons-with-images radio-buttons-with-images--unselectable'>\n <div class='radio image'>\n <img src='/assets/questionnaire/sof_door_locks/mortice_deadlock.jpg' alt='Mortice deadlock' />\n <span class='radio-label'>\n <span>Mortice deadlock</span>\n </span>\n </div>\n <div class='radio image'>\n <img src='/assets/questionnaire/sof_door_locks/mortice_deadlock_BS_3621.jpg' alt='Mortice deadlock bs 3621' />\n <span class='radio-label'>\n <span>Mortice deadlock conforming to BS3621</span>\n </span>\n </div>\n <div class='radio image'>\n <img src='/assets/questionnaire/sof_door_locks/multi_point_lock.jpg' alt='Multi point lock' />\n <span class='radio-label'>\n <span>Key-operated multipoint lock</span>\n </span>\n </div>\n <div class='radio image'>\n <img src='/assets/questionnaire/sof_door_locks/automatic_deadlatch.jpg' alt='Automatic deadlatch' />\n <span class='radio-label'>\n <span>Rim automatic deadlatch with key-locking handle</span>\n </span>\n </div>\n </div>",
                  presentationText:
                    " <b>I agree</b> that all main exit doors have at least one of these locks: <ul> <li>a mortice deadlock</li> <li>a mortice deadlock conforming to BS3621</li> <li>a key-operated multipoint lock</li> <li>a rim automatic deadlatch with key-locking handle</li> </ul> ",
                  presentationGroup: "Security",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_window_locks",
                  name: "SoF window locks",
                  primaryText:
                    "All accessible windows are fitted with locks that have a removable key, or are permanently screwed shut.",
                  presentationText:
                    " <b>I agree</b> that all accessible windows are fitted with locks that have a removable key, or are permanently screwed shut. ",
                  presentationGroup: "Security",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_residential_property",
                  name: "SoF residential property",
                  primaryText:
                    "The property is only used for residential purposes.",
                  presentationText:
                    "<b>I agree</b> the property will only used for residential purposes",
                  presentationGroup: "Property use",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_currently_occupied",
                  name: "SoF currently occupied",
                  primaryText:
                    "The entire property will be occupied when the policy starts.",
                  presentationText:
                    "<b>I agree</b> the entire property will be occupied when the policy starts.",
                  presentationGroup: "Property use",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "is_property_holiday_let",
                  name: "Is property holiday let",
                  primaryText: "Is your property a Holiday Let?",
                  presentationText:
                    "<b>I agree</b> the property <b>is not</b> a holiday let",
                  presentationGroup: "Property use",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "Yes",
                      value: "yes",
                    },
                    {
                      label: "No",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                },
                {
                  id: "sof_unoccupied_midterm_45_days",
                  name: "SoF unoccupied midterm 45 days",
                  primaryText:
                    "The entire property will never be left unoccupied for more than 45 consecutive days, once tenants have moved in.",
                  presentationText:
                    "<b>I agree</b> the property will not be unoccupied for more than 45 days in a row",
                  presentationGroup: "Property use",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_single_tenancy_agreement",
                  name: "SoF single tenancy agreement",
                  primaryText:
                    "I will have a single tenancy agreement in place.",
                  presentationText:
                    "<b>I agree</b> the property will have a single tenancy agreement in place.",
                  presentationGroup: "Property use",
                  shouldUpdate: true,
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_type_of_single_tenancy_agreement",
                  name: "SoF type of single tenancy agreement online",
                  primaryText:
                    "Do you rent your property to 3 or more adults who are not related?",
                  secondaryText:
                    "For example, student accommodation or house shares.",
                  presentationText:
                    "<b>I agree</b> the property to 3 or more adults who are not related?",
                  presentationGroup: "Property use",
                  shouldUpdate: true,
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "Yes",
                      value: "yes",
                    },
                    {
                      label: "No",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "select",
                  },
                },
                {
                  id: "sof_agreement_type",
                  name: "SoF agreement type (England and Wales)",
                  primaryText:
                    "The property will be let under one of the following agreements:\n <ul>\n <li>an assured tenancy</li>\n <li>an assured shorthold in England & Wales</li>\n <li>a regulated tenancy agreement</li>\n <li>an occupation contract in Wales</li>\n </ul>",
                  presentationText:
                    " <b>I agree</b> that the property will be let under one of the following agreements: <ul> <li>an assured tenancy</li> <li>an assured shorthold in England & Wales</li> <li>a regulated tenancy agreement</li> <li>an occupation contract in Wales</li> </ul> ",
                  presentationGroup: "Property use",
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_agreement_type",
                  name: "SoF agreement type (Scotland)",
                  primaryText:
                    "The property will be let under one of the following agreements:\n <ul>\n <li>an assured tenancy</li>\n <li>a short assured tenancy in Scotland</li>\n <li>a regulated tenancy agreement</li>\n <li>a private residential agreement in Scotland</li>\n </ul>",
                  presentationText:
                    " <b>I agree</b> that the property will be let under one of the following agreements: <ul> <li>an assured tenancy</li> <li>a short assured tenancy in Scotland</li> <li>a regulated tenancy agreement</li> <li>a private residential agreement in Scotland</li> </ul> ",
                  presentationGroup: "Property use",
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_agreement_type",
                  name: "SoF agreement type (Northern Ireland)",
                  primaryText:
                    "The property will be let under one of the following agreements:\n <ul>\n <li>an assured tenancy</li>\n <li>a private rental agreement in Northern Ireland</li>\n <li>a regulated tenancy agreement</li>\n </ul>",
                  presentationText:
                    " <b>I agree</b> that the property will be let under one of the following agreements: <ul> <li>an assured tenancy</li> <li>a private rental agreement in Northern Ireland</li> <li>a regulated tenancy agreement</li> </ul> ",
                  presentationGroup: "Property use",
                  visible: false,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_bankruptcy",
                  name: "SoF bankruptcy",
                  primaryText:
                    "I, and anyone else with a financial interest in the property (excluding tenants), have never been:\n <ul>\n <li>declared bankrupt</li>\n <li>the director of a company that has entered or completed liquidation</li>\n </ul>",
                  presentationText:
                    " <b>I agree</b> that I, and anyone else with a financial interest in the property (excluding tenants), have never been: <ul> <li>declared bankrupt</li> <li>the director of a company that has entered or completed liquidation</li> </ul> ",
                  presentationGroup: "Financial and Claims",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_criminal_offence",
                  name: "SoF criminal offence",
                  primaryText:
                    "Neither I, nor anyone with a financial interest in the property (excluding tenants) has been convicted of any criminal offence (excluding minor motoring offences).",
                  presentationText:
                    " <b>I agree</b> that Neither I, nor anyone with a financial interest in the property (excluding tenants) has been convicted of any criminal offence (excluding minor motoring offences). ",
                  presentationGroup: "Financial and Claims",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_insurance_declined",
                  name: "SoF insurance declined",
                  primaryText:
                    "I've never had any request for insurance refused, or had any insurance cover restricted or cancelled by an insurer.",
                  presentationText:
                    " <b>I agree</b> that I've never had any request for insurance refused, or had any insurance cover restricted or cancelled by an insurer. ",
                  presentationGroup: "Financial and Claims",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_liability_claims",
                  name: "SoF liability claims",
                  primaryText:
                    "No one has requested compensation from me because they've been injured or their property has been damaged.",
                  presentationText:
                    " <b>I agree</b> that no one has requested compensation from me because they've been injured or their property has been damaged. ",
                  presentationGroup: "Financial and Claims",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_possible_claims",
                  name: "SoF possible claims",
                  primaryText:
                    "I'm not aware of anything that could cause a future claim or compensation request.",
                  presentationText:
                    " <b>I agree</b> that I'm not aware of anything that could cause a future claim or compensation request. ",
                  presentationGroup: "Financial and Claims",
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_property_claims_in_the_last_0_to_4_years",
                  name: "SoF property claims in the last 0 to 4 years",
                  primaryText:
                    "In the time that I've owned the property, there haven't been any claims at the property. There also haven't been any events at the property that I could have claimed for, but either chose not to, or didn't have insurance in place at the time.",
                  presentationText:
                    " <b>I agree</b> that in the time that I've owned the property, there haven't been any claims at the property. There also haven't been any events at the property that I could have claimed for, but either chose not to, or didn't have insurance in place at the time. ",
                  presentationGroup: "Financial and Claims",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
                {
                  id: "sof_ccj",
                  name: "SoF ccj",
                  primaryText:
                    "I, and anyone else with a financial interest in the property (excluding tenants) have never been the subject of a county court judgment",
                  presentationText:
                    " <b>I agree</b> that I, and anyone else with a financial interest in the property (excluding tenants) have never been the subject of a county court judgment ",
                  presentationGroup: "Financial and Claims",
                  shouldUpdate: true,
                  visible: true,
                  required: true,
                  options: [
                    {
                      label: "I agree",
                      value: "yes",
                    },
                    {
                      label: "I disagree",
                      value: "no",
                    },
                  ],
                  display: {
                    type: "radio_buttons",
                  },
                },
              ],
            },
          ],
        },
      },
    ],
    variations: [],
  },
  scripts: [],
  configuration: {
    locale: "en-GB",
    journeyToken: "f951f718f6653f400fec3e85e69c5eff",
    site: "simplybusiness",
    authenticityToken:
      "Qk1D4biwnnwkgBnzUgp4X0kBI3H1ILWgAwmgDkzy2eVTEvoEQCz9ieTUDWXAkSI8LDS_h9X_Vim5MxOg0rMwaQ",
  },
  experiments: {},
};
