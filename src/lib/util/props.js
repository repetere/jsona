// // @ts-ignore
// import Promisie from "promisie";
import { findMatchingRoutePath } from "test-matching-route";
import { fetchJSON, fetchResources,  } from './data';

export async function loadTemplates({ config, viewxTemplates, templates, setTemplates, setUI, ui, }) {
  // @ts-ignore
  const loadedTemplates = await fetchJSON(config.settings.templatePath, config.settings.templateFetchOptions);
  viewxTemplates = {
    ...templates,
    ...loadedTemplates,
  };

  setTemplates(viewxTemplates);
  setUI({
    ...ui,
    hasLoadedInitialTemplates: true,
  });
  return { viewxTemplates };
}

export async function loadRoute({ viewxTemplates, pathname, dispatcher, layers, }) {
 
  layers.forEach(async(layer) => {
    const { name, } = layer;
    try {
      const template = findMatchingRoutePath(viewxTemplates[name], pathname, {
        return_matching_keys: true
      });
      let viewdata = {};
      let vxtObject = {};
      if (template) {
        vxtObject = viewxTemplates[name][ template.route ];
        // console.log({ template, name, type, vxtObject });
        viewdata = await fetchResources(vxtObject);
        dispatcher({
          type: "setView",
          view: { [name]: vxtObject },
          viewdata: { [name]:viewdata }
        });
      } else {
        dispatcher({
          type: "setView",
          view: { [name]: viewxTemplates[name].__error_404 }
        });
      }
    } catch (e) {
      console.error(e);
      dispatcher({
        type: "setView",
        view: { [name]: viewxTemplates[name].__error_500 },
        viewdata: { [name]: { error: e } }
      });
    }
  });
}

//func:this.props.login, func:window.alert, func:viewx.Functions.logout
export const FUNCTION_NAME_REGEXP = /func:(?:this\.props|window|viewx)(?:\.Functions)?\.(\D.+)*/;
export function getDynamicFunctionName(function_name) {
  return function_name.replace(FUNCTION_NAME_REGEXP, '$1');
};
