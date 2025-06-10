module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.4/node_modules/shiki/dist/langs/dotenv.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"dotEnv\",\"name\":\"dotenv\",\"patterns\":[{\"captures\":{\"1\":{\"patterns\":[{\"include\":\"#line-comment\"}]}},\"comment\":\"Full Line Comment\",\"match\":\"^\\\\s?(#.*$)\\\\n\"},{\"captures\":{\"1\":{\"patterns\":[{\"include\":\"#key\"}]},\"2\":{\"name\":\"keyword.operator.assignment.dotenv\"},\"3\":{\"name\":\"property.value.dotenv\",\"patterns\":[{\"include\":\"#line-comment\"},{\"include\":\"#double-quoted-string\"},{\"include\":\"#single-quoted-string\"},{\"include\":\"#interpolation\"}]}},\"comment\":\"ENV entry\",\"match\":\"^\\\\s?(.*?)\\\\s?(=)(.*)$\"}],\"repository\":{\"double-quoted-string\":{\"captures\":{\"1\":{\"patterns\":[{\"include\":\"#interpolation\"},{\"include\":\"#escape-characters\"}]}},\"comment\":\"Double Quoted String\",\"match\":\"\\\"(.*)\\\"\",\"name\":\"string.quoted.double.dotenv\"},\"escape-characters\":{\"comment\":\"Escape characters\",\"match\":\"\\\\\\\\[nrtfb\\\"'\\\\\\\\]|\\\\\\\\u[0123456789ABCDEF]{4}\",\"name\":\"constant.character.escape.dotenv\"},\"interpolation\":{\"captures\":{\"1\":{\"name\":\"keyword.interpolation.begin.dotenv\"},\"2\":{\"name\":\"variable.interpolation.dotenv\"},\"3\":{\"name\":\"keyword.interpolation.end.dotenv\"}},\"comment\":\"Interpolation (variable substitution)\",\"match\":\"(\\\\$\\\\{)(.*)(\\\\})\"},\"key\":{\"captures\":{\"1\":{\"name\":\"keyword.key.export.dotenv\"},\"2\":{\"name\":\"variable.key.dotenv\",\"patterns\":[{\"include\":\"#variable\"}]}},\"comment\":\"Key\",\"match\":\"(export\\\\s)?(.*)\"},\"line-comment\":{\"comment\":\"Comment\",\"match\":\"#.*$\",\"name\":\"comment.line.dotenv\"},\"single-quoted-string\":{\"comment\":\"Single Quoted String\",\"match\":\"'(.*)'\",\"name\":\"string.quoted.single.dotenv\"},\"variable\":{\"comment\":\"env variable\",\"match\":\"[a-zA-Z_]+\\\\w*\"}},\"scopeName\":\"source.dotenv\"}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),

};

//# sourceMappingURL=13d55_shiki_dist_langs_dotenv_mjs_ec69ab._.js.map