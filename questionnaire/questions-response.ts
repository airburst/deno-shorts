export const data = {
  layout: {
    components: [
      {
        metadata: {
          name: "questionnaire",
        },
        props: {
          sections: [
            {
              title: "Compare quotes from trusted landlord brands",
              preambleName: "landlord_insurer_logos_changed",
              postamble:
                "Make sure you answer honestly, with accurate and up-to-date information. If you don't, your policy may be cancelled, and your insurer could reject your claim or decide not to pay it in full.\u003cbr\u003e\u003cbr\u003eYou will not receive advice or a recommendation from us. However, we may ask you certain questions so that we can narrow down the selection of insurance products we make available to you. As we provide information only, you will need to make your own choice about which insurance policy to buy.",
              questions: [
                {
                  name: "Landlord type",
                  visible: true,
                  answer: "residential",
                },
              ],
            },
            {
              title: "Property Address",
              questions: [
                {
                  name: "UK address lookup",
                  visible: true,
                },
              ],
            },
            {
              title: "Let's get some quick details on your property",
              questions: [
                {
                  name: "Property type",
                  shouldUpdate: true,
                  visible: true,
                  answer: "Semi-detached house",
                },
                {
                  name: "Number of bedrooms online",
                  visible: true,
                  answer: "4",
                },
                {
                  name: "Number of bathrooms online",
                  visible: true,
                  answer: "1",
                },
                {
                  name: "Property age",
                  visible: true,
                  answer: "Between 1990 and 2000",
                },
                {
                  name: "SoF listed building (England and Wales)",
                  shouldUpdate: true,
                  visible: true,
                  answer: "no",
                },
                {
                  name: "SoF listed building (Scotland)",
                  shouldUpdate: true,
                  visible: false,
                  answer: "no",
                },
                {
                  name: "SoF listed building (Northern Ireland)",
                  shouldUpdate: true,
                  visible: false,
                  answer: "no",
                },
                {
                  name: "Property listing category (England and Wales)",
                  visible: true,
                  answer: "Grade I (England and Wales)",
                },
                {
                  name: "Property listing category (Scotland)",
                  visible: false,
                  answer: "Grade I (England and Wales)",
                },
                {
                  name: "Property listing category (Northern Ireland)",
                  visible: false,
                  answer: "Grade I (England and Wales)",
                },
              ],
            },
            {
              title: null,
              questions: [
                {
                  name: "Years owned",
                  shouldUpdate: true,
                  visible: true,
                  answer: "2-3 years",
                },
              ],
            },
            {
              title: "Let's move on to your tenants",
              questions: [
                {
                  name: "Tenant type",
                  visible: false,
                  answer: "The property will be unoccupied",
                },
              ],
            },
            {
              title: null,
              questions: [
                {
                  name: "SoF background checks activities",
                  shouldUpdate: true,
                  visible: false,
                },
              ],
            },
            {
              title: "One last thing before you select your covers",
              preamble:
                "\u003cul\u003e\u003cli\u003eRent Guarantee cover up to £100,000 or up to 12 months\u003c/li\u003e\u003cli\u003eBuilding insurance upto £600,000 as standard\u003c/li\u003e\u003cli\u003eFree legal and tax advice with legal cover\u003c/li\u003e\u003c/ul\u003e",
              postamble:
                "We collect and use relevent information about you to provide you with your insurance, and to meet our legal obligations. By providing us with your details you confirm that you agree with our \u003ca href='https://www.simplybusiness.co.uk/terms-conditions'\u003eterms and conditions\u003c/a\u003e and that you have read our \u003ca href='https://www.simplybusiness.co.uk/privacy-policy'\u003eprivacy policy\u003c/a\u003e which effectively replaces the first and third paragraph of what is there currently and we dont need to show it on any page until the PII questions.",
              shouldUpdate: true,
              questions: [
                {
                  name: "Customer title",
                  visible: true,
                },
                {
                  name: "Customer first name",
                  visible: true,
                },
                {
                  name: "Customer last name",
                  visible: true,
                },
                {
                  name: "Customer email address",
                  visible: true,
                },
                {
                  name: "Customer telephone number",
                  visible: true,
                },
              ],
            },
            {
              title: null,
              questions: [
                {
                  name: "Same correspondence address pre quote",
                  visible: true,
                  answer: "yes",
                },
              ],
            },
            {
              title:
                "Now let's get you protected - you pick the covers, we'll show you prices from leading insurers",
              questions: [
                {
                  name: "Fixtures and fittings or main building shared select",
                  shouldUpdate: true,
                  visible: false,
                },
                {
                  name: "Fixtures and fittings",
                  visible: false,
                  answer: 0,
                },
                {
                  name: "Main building shared pre-pop",
                  visible: false,
                },
              ],
            },
            {
              title: null,
              questions: [
                {
                  name: "Contents select",
                  shouldUpdate: true,
                  visible: true,
                  answer: "yes",
                },
                {
                  name: "Contents",
                  visible: true,
                },
              ],
            },
            {
              title: null,
              questions: [
                {
                  name: "Legal expenses",
                  shouldUpdate: true,
                  visible: false,
                },
                {
                  name: "Tenant default",
                  visible: false,
                },
              ],
            },
            {
              title: null,
              questions: [
                {
                  name: "Public liability",
                  visible: true,
                },
              ],
            },
            {
              title: null,
              questions: [
                {
                  name: "Accidental damage for buildings",
                  visible: false,
                },
                {
                  name: "Accidental damage for contents",
                  visible: false,
                },
                {
                  name: "Accidental damage for fixtures and fittings",
                  visible: false,
                },
                {
                  name: "Accidental damage for fixtures and fittings and contents",
                  visible: false,
                },
                {
                  name: "Accidental damage for buildings and contents",
                  visible: false,
                },
                {
                  name: "Accidental damage not available",
                  visible: false,
                },
              ],
            },
            {
              title: null,
              questions: [
                {
                  name: "Home emergency",
                  visible: false,
                },
              ],
            },
            {
              title: null,
              questions: [
                {
                  name: "Excess sum insured",
                  visible: true,
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
    journeyToken: "b4398903efc4ddcb5a5fe55540cdfe75",
    locale: "en-GB",
    authenticityToken:
      "io6F62Qd70_vsoYdZqxTNCCA3ePM1nTqWii0tpwr4GgMy5fsOt8WhZKB1ipcjNdd9-O14N3WFWy617aOV7rAag",
  },
  experiments: {},
};
