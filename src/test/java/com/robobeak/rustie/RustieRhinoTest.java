package com.robobeak.rustie;

import org.junit.Test;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.commonjs.module.RequireBuilder;
import org.mozilla.javascript.commonjs.module.provider.SoftCachingModuleScriptProvider;
import org.mozilla.javascript.commonjs.module.provider.UrlModuleSourceProvider;

import java.net.URISyntaxException;
import java.util.Collections;
import java.util.Scanner;

public class RustieRhinoTest {
    @Test
    public void testRhino() throws URISyntaxException {
        final Context context = Context.enter();
        final Scriptable scope = context.initStandardObjects();

//        new RequireBuilder()
//                .setModuleScriptProvider(new SoftCachingModuleScriptProvider(
//                        new UrlModuleSourceProvider(null, Collections.singletonList(getClass().getResource("/rustie.js").toURI()))))
//                .setSandboxed(true)
//                .createRequire(context, scope)
//                .install(scope);

//        ctx.evaluateReader(scope, Files.readAllLines(""))
        final Scanner lines = new java.util.Scanner(getClass().getResourceAsStream("/rustie.js")).useDelimiter("\\A");
        final String sourceCode = lines.hasNext() ? lines.next() : "";
//        System.out.println(sourceCode);
        context.evaluateString(scope, sourceCode, "main", 1, null);
        Context.exit();
//        System.out.println(Arrays.deepToString(result.toArray()));
//        org.junit.Assert.assertNotNull(result);
        org.junit.Assert.assertEquals(true, true);
    }
}
