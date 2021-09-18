# xcodeproj

Xcode Project 文件格式

### 简介

Xcode 项目文件是一个旧式 plist（Next 样式），基于大括号来分隔层次结构。该文件以明确的编码信息开头，通常是 UTF-8 编码信息

#### 工程的结构图

![](https://bytedance.feishu.cn/space/api/box/stream/download/asynccode/?code=NTlhNDQxODIwZmQ3ZTIyYjQzOWMyOWM3OGUzZjRiZjNfbFBkcU9mb2xnTEVsclFRRnVxamlORGRkRWJpdzRiZkZfVG9rZW46Ym94Y25NZkV5M25TSGtVWWcxVm1QVEtMTnlmXzE2MzE5NDc5OTQ6MTYzMTk1MTU5NF9WNA)

#### 唯一标识符

文件中的每个元素都由使用 24 位十六进制表示的 96 位标识符唯一标识。该唯一标识符在整个文档中是唯一的

#### 元素

* Root Element
* PBXBuildFile
* PBXBuildPhase
  * PBXCopyFilesBuildPhase
* PBXAppleScriptBuildPhase
* PBXFrameworksBuildPhase
* PBXHeadersBuildPhase
* PBXResourcesBuildPhase
* PBXShellScriptBuildPhase
* PBXSourcesBuildPhase
* PBXContainerItemProxy
* PBXFileElement
  * PBXFileReference
* PBXGroup
* PBXVariantGroup
* PBXTarget
  * PBXAggregateTarget
* PBXLegacyTarget
* PBXNativeTarget
* PBXProject
* PBXTargetDependency
* XCBuildConfiguration
* XCConfigurationList

#### Root Element

root 部分包含通用的信息

| **属性** | **类型** | **值** | **注解** |
| :--- | :--- | :--- | :--- |
| archiveVersion | Number | 1 | Default value. |
| classes | List | Empty |  |
| objectVersion | Number |  | 表示所兼容的最低版本的 Xcode,45 =&gt; 'Xcode 3.1', |
| objects | Map | A map of element | The map is indexed by the elements identifier. |
| rootObject | Reference | An element reference | 记录的 16 进制数字，为 project 对象的索引 |

例子：

```text
// !$*UTF8*$!
{
    archiveVersion = 1;
    classes = {
    };
    objectVersion = 45;
    objects = {
    ...
    };
    rootObject = 0867D690FE84028FC02AAC07 /* Project object */;
}
```

#### PBXBuildFile

This element indicate a file reference that is used in a PBXBuildPhase \(either as an include or resource\).

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXBuildFile | Empty |  |
| fileRef | Reference | An element reference | The object is a reference to a PBXFileReference element. |
| settings | Map |  | A map of key/value pairs for additionnal settings. |

例子：

```text
/* Begin PBXBuildFile section */
        1785370C25DE0B7D00CDC6D9 /* AppDelegate.m in Sources */ = {isa = PBXBuildFile; fileRef = 1785370B25DE0B7D00CDC6D9 /* AppDelegate.m */; };
        A8ABC5CC77F8DFDD948068B0 /* Pods_LSMetricsSample.framework in Frameworks */ = {isa = PBXBuildFile; fileRef = C59D6F7710FED11C1A5D4B6F /* Pods_LSMetricsSample.framework */; };
        CDD2F76404FF206BF79AC5FD /* Pods_LSMetricsSample_LSMetricsSampleUITests.framework in Frameworks */ = {isa = PBXBuildFile; fileRef = D60D512C4F311E7048FC7C87 /* Pods_LSMetricsSample_LSMetricsSampleUITests.framework */; };
/* End PBXBuildFile section */
```

#### PBXBuildPhase

是编译阶段的抽象的父类

**PBXCopyFilesBuildPhase**

在编译阶段负责文件的copy操作

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXCopyFilesBuildPhase | Empty |  |
| buildActionMask | Number | 2^32-1 |  |
| dstPath | String | The destination path |  |
| dstSubfolderSpec | Number |  |  |
| files | List | A list of element reference | The objects are a reference to a PBXBuildFile element. |
| runOnlyForDeploymentPostprocessing | Number | 0 |  |

```text
/* Begin PBXCopyFilesBuildPhase section */
        84C1BE222668842900B5A67F /* CopyFiles */ = {
            isa = PBXCopyFilesBuildPhase;
            buildActionMask = 2147483647;
            dstPath = "";
            dstSubfolderSpec = 7;
            files = (
            );
            runOnlyForDeploymentPostprocessing = 0;
        };
/* End PBXCopyFilesBuildPhase section */
```

**PBXFrameworksBuildPhase**

编译阶段的frame相关的引用

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXFrameworksBuildPhase | Empty |  |
| buildActionMask | Number | 2^32-1 |  |
| files | List | A list of element reference | The objects are a reference to a PBXBuildFile element. |
| runOnlyForDeploymentPostprocessing | Number | 0 |  |

例子：

```text
/* Begin PBXFrameworksBuildPhase section */
        1785370425DE0B7D00CDC6D9 /* Frameworks */ = {
            isa = PBXFrameworksBuildPhase;
            buildActionMask = 2147483647;
            files = (
                A8ABC5CC77F8DFDD948068B0 /* Pods_LSMetricsSample.framework in Frameworks */,
            );
            runOnlyForDeploymentPostprocessing = 0;
        };
        1785371F25DE0B7F00CDC6D9 /* Frameworks */ = {
            isa = PBXFrameworksBuildPhase;
            buildActionMask = 2147483647;
            files = (
                2D73C4D8D3B6497D919C3038 /* Pods_LSMetricsSampleTests.framework in Frameworks */,
            );
            runOnlyForDeploymentPostprocessing = 0;
        };
        1785372A25DE0B7F00CDC6D9 /* Frameworks */ = {
            isa = PBXFrameworksBuildPhase;
            buildActionMask = 2147483647;
            files = (
                CDD2F76404FF206BF79AC5FD /* Pods_LSMetricsSample_LSMetricsSampleUITests.framework in Frameworks */,
            );
            runOnlyForDeploymentPostprocessing = 0;
        };
/* End PBXFrameworksBuildPhase section */
```

**PBXHeadersBuildPhase**

This is the element for the framewrok link build phase.

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXHeadersBuildPhase | Empty |  |
| buildActionMask | Number | 2^32-1 |  |
| files | List | A list of element reference | The objects are a reference to a PBXBuildFile element. |
| runOnlyForDeploymentPostprocessing | Number | 0 |  |

例子：

```text
/* Begin PBXHeadersBuildPhase section */
        84C1BE2A2668843500B5A67F /* Headers */ = {
            isa = PBXHeadersBuildPhase;
            buildActionMask = 2147483647;
            files = (
            );
            runOnlyForDeploymentPostprocessing = 0;
        };
/* End PBXHeadersBuildPhase section */
```

**PBXResourcesBuildPhase**

This is the element for the resources copy build phase.在编译阶段负责资源类型的文件copy，例如：Main.storyboard、

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXResourcesBuildPhase | Empty |  |
| buildActionMask | Number | 2^32-1 |  |
| files | List | A list of element reference | The objects are a reference to a PBXBuildFile element. |
| runOnlyForDeploymentPostprocessing | Number | 0 |  |

例子:

```text
/* Begin PBXResourcesBuildPhase section */
        1785370525DE0B7D00CDC6D9 /* Resources */ = {
            isa = PBXResourcesBuildPhase;
            buildActionMask = 2147483647;
            files = (
                1785371A25DE0B7F00CDC6D9 /* LaunchScreen.storyboard in Resources */,
                1785371725DE0B7F00CDC6D9 /* Assets.xcassets in Resources */,
                1785371525DE0B7D00CDC6D9 /* Main.storyboard in Resources */,
            );
            runOnlyForDeploymentPostprocessing = 0;
        };
/* End PBXResourcesBuildPhase section */
```

**PBXShellScriptBuildPhase**

在编译阶段执行script脚本命令

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXShellScriptBuildPhase | Empty |  |
| buildActionMask | Number | 2^32-1 |  |
| files | List | A list of element reference | The objects are a reference to a PBXBuildFile element. |
| inputPaths | List | A list of string | The input paths. |
| outputPaths | List | A list of string | The output paths. |
| runOnlyForDeploymentPostprocessing | Number | 0 |  |
| shellPath | String | The path to the shell interpreter. |  |
| shellScript | String | The content of the script shell. |  |

例子:

```text
/* Begin PBXShellScriptBuildPhase section */
        9516402D9EA76B0B6596FD68 /* [CP] Check Pods Manifest.lock */ = {
            isa = PBXShellScriptBuildPhase;
            buildActionMask = 2147483647;
            files = (
            );
            inputFileListPaths = (
            );
            inputPaths = (
                "${PODS_PODFILE_DIR_PATH}/Podfile.lock",
                "${PODS_ROOT}/Manifest.lock",
            );
            name = "[CP] Check Pods Manifest.lock";
            outputFileListPaths = (
            );
            outputPaths = (
                "$(DERIVED_FILE_DIR)/Pods-LSMetricsSample-checkManifestLockResult.txt",
            );
            runOnlyForDeploymentPostprocessing = 0;
            shellPath = /bin/sh;
            shellScript = "diff \"${PODS_PODFILE_DIR_PATH}/Podfile.lock\" \"${PODS_ROOT}/Manifest.lock\" > /dev/null\nif [ $? != 0 ] ; then\n    # print error to STDERR\n    echo \"error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.\" >&2\n    exit 1\nfi\n# This output is used by Xcode 'outputs' to avoid re-running this script phase.\necho \"SUCCESS\" > \"${SCRIPT_OUTPUT_FILE_0}\"\n";
            showEnvVarsInLog = 0;
        };
        BE39479C32F04E5B5C06E62C /* [CP] Embed Pods Frameworks */ = {
            isa = PBXShellScriptBuildPhase;
            buildActionMask = 2147483647;
            files = (
            );
            inputFileListPaths = (
                "${PODS_ROOT}/Target Support Files/Pods-LSMetricsSample/Pods-LSMetricsSample-frameworks-${CONFIGURATION}-input-files.xcfilelist",
            );
            name = "[CP] Embed Pods Frameworks";
            outputFileListPaths = (
                "${PODS_ROOT}/Target Support Files/Pods-LSMetricsSample/Pods-LSMetricsSample-frameworks-${CONFIGURATION}-output-files.xcfilelist",
            );
            runOnlyForDeploymentPostprocessing = 0;
            shellPath = /bin/sh;
            shellScript = "\"${PODS_ROOT}/Target Support Files/Pods-LSMetricsSample/Pods-LSMetricsSample-frameworks.sh\"\n";
            showEnvVarsInLog = 0;
        };

/* End PBXShellScriptBuildPhase section */
```

**PBXSourcesBuildPhase**

This is the element for the sources compilation build phase.

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXSourcesBuildPhase | Empty |  |
| buildActionMask | Number | 2^32-1 |  |
| files | List | A list of element reference | The objects are a reference to a PBXBuildFile element. |
| runOnlyForDeploymentPostprocessing | Number | 0 |  |

例子:

```text
/* Begin PBXSourcesBuildPhase section */
        1785370325DE0B7D00CDC6D9 /* Sources */ = {
            isa = PBXSourcesBuildPhase;
            buildActionMask = 2147483647;
            files = (
                1785371225DE0B7D00CDC6D9 /* ViewController.m in Sources */,
                1785370C25DE0B7D00CDC6D9 /* AppDelegate.m in Sources */,
                1785371D25DE0B7F00CDC6D9 /* main.m in Sources */,
                1785370F25DE0B7D00CDC6D9 /* SceneDelegate.m in Sources */,
            );
            runOnlyForDeploymentPostprocessing = 0;
        };
/* End PBXSourcesBuildPhase section */
```

#### PBXContainerItemProxy

是target的装饰器

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXContainerItemProxy | Empty |  |
| containerPortal | Reference | An element reference | 对 PBXProject 元素的引用 |
| proxyType | Number | 1 |  |
| remoteGlobalIDString | Reference | An element reference | A unique reference ID. |
| remoteInfo | String |  |  |

例子：

```text
/* Begin PBXContainerItemProxy section */
        1785372325DE0B7F00CDC6D9 /* PBXContainerItemProxy */ = {
            isa = PBXContainerItemProxy;
            containerPortal = 178536FF25DE0B7D00CDC6D9 /* Project object */;
            proxyType = 1;
            remoteGlobalIDString = 1785370625DE0B7D00CDC6D9;
            remoteInfo = LSMetricsSample;
        };
        1785372E25DE0B7F00CDC6D9 /* PBXContainerItemProxy */ = {
            isa = PBXContainerItemProxy;
            containerPortal = 178536FF25DE0B7D00CDC6D9 /* Project object */;
            proxyType = 1;
            remoteGlobalIDString = 1785370625DE0B7D00CDC6D9;
            remoteInfo = LSMetricsSample;
        };
/* End PBXContainerItemProxy section */
```

#### PBXFileElement

该元素是文件和group的抽象父类

**PBXFileReference**

PBXFileReference 是用来记录工程引用的所有外部文件的类：源码文件、资源文、库 、生成的Application文件等

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXFileReference | Empty |  |
| fileEncoding | Number |  | See the PBXFileEncoding enumeration. |
| explicitFileType | String |  | See the PBXFileType enumeration. |
| lastKnownFileType | String |  | See the PBXFileType enumeration. |
| name | String | The filename. |  |
| path | String | The path to the filename. |  |
| sourceTree | String | See the PBXSourceTree enumeration. |  |

```text
/* Begin PBXFileReference section */
        1785370725DE0B7D00CDC6D9 /* LSMetricsSample.app */ = {isa = PBXFileReference; explicitFileType = wrapper.application; includeInIndex = 0; path = LSMetricsSample.app; sourceTree = BUILT_PRODUCTS_DIR; };
        1785370A25DE0B7D00CDC6D9 /* AppDelegate.h */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.c.h; path = AppDelegate.h; sourceTree = "<group>"; };
        1785370B25DE0B7D00CDC6D9 /* AppDelegate.m */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.c.objc; path = AppDelegate.m; sourceTree = "<group>"; };
        1785371425DE0B7D00CDC6D9 /* Base */ = {isa = PBXFileReference; lastKnownFileType = file.storyboard; name = Base; path = Base.lproj/Main.storyboard; sourceTree = "<group>"; };
        1785371625DE0B7F00CDC6D9 /* Assets.xcassets */ = {isa = PBXFileReference; lastKnownFileType = folder.assetcatalog; path = Assets.xcassets; sourceTree = "<group>"; };
        1785371B25DE0B7F00CDC6D9 /* Info.plist */ = {isa = PBXFileReference; lastKnownFileType = text.plist.xml; path = Info.plist; sourceTree = "<group>"; };
        1785372225DE0B7F00CDC6D9 /* LSMetricsSampleTests.xctest */ = {isa = PBXFileReference; explicitFileType = wrapper.cfbundle; includeInIndex = 0; path = LSMetricsSampleTests.xctest; sourceTree = BUILT_PRODUCTS_DIR; };
        5152A6464414B977CAA504CF /* Pods_LSMetricsSampleTests.framework */ = {isa = PBXFileReference; explicitFileType = wrapper.framework; includeInIndex = 0; path = Pods_LSMetricsSampleTests.framework; sourceTree = BUILT_PRODUCTS_DIR; };
        8473E87B26677FFD0029BA9E /* zh-Hans */ = {isa = PBXFileReference; lastKnownFileType = text.plist.strings; name = "zh-Hans"; path = "zh-Hans.lproj/Main.strings"; sourceTree = "<group>"; }
        E2E58BD36173A4842DCECBF8 /* Pods-LSMetricsSample.release.xcconfig */ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-LSMetricsSample.release.xcconfig"; path = "Target Support Files/Pods-LSMetricsSample/Pods-LSMetricsSample.release.xcconfig"; sourceTree = "<group>"; };
/* End PBXFileReference section */
```

**PBXGroup**

This is the element to group files or groups.用来组织文件或者文件的组

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXGroup | Empty |  |
| children | List | A list of element reference | The objects are a reference to a PBXFileElement element. |
| name | String | The filename. | 文件的名称 |
| sourceTree | String | See the PBXSourceTree enumeration. |  |

例子:

```text
/* Begin PBXGroup section */
        178536FE25DE0B7D00CDC6D9 = {
            isa = PBXGroup;
            children = (
                1785370925DE0B7D00CDC6D9 /* LSMetricsSample */,
                F91D80136B3FCAF97332B1FD /* Pods */,
                24DF85ACED7CECB56FD1EFBB /* Frameworks */,
            );
            sourceTree = "<group>";
        };
        1785370925DE0B7D00CDC6D9 /* LSMetricsSample */ = {
            isa = PBXGroup;
            children = (
                1785370A25DE0B7D00CDC6D9 /* AppDelegate.h */,
                1785370B25DE0B7D00CDC6D9 /* AppDelegate.m */,
            );
            path = LSMetricsSample;
            sourceTree = "<group>";
        };
        24DF85ACED7CECB56FD1EFBB /* Frameworks */ = {
            isa = PBXGroup;
            children = (
                C59D6F7710FED11C1A5D4B6F /* Pods_LSMetricsSample.framework */,
                D60D512C4F311E7048FC7C87 /* Pods_LSMetricsSample_LSMetricsSampleUITests.framework */,
                5152A6464414B977CAA504CF /* Pods_LSMetricsSampleTests.framework */,
            );
            name = Frameworks;
            sourceTree = "<group>";
        };
        F91D80136B3FCAF97332B1FD /* Pods */ = {
            isa = PBXGroup;
            children = (
                C13343D9F50C3CE448E3B70A /* Pods-LSMetricsSample.debug.xcconfig */,
                E2E58BD36173A4842DCECBF8 /* Pods-LSMetricsSample.release.xcconfig */,
            );
            path = Pods;
            sourceTree = "<group>";
        };
/* End PBXGroup section */
```

**PBXVariantGroup**

该元素是对本土化的资源引用

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXVariantGroup | Empty |  |
| children | List | A list of element reference | The objects are a reference to a PBXFileElement element. |
| name | String | The filename. |  |
| sourceTree | String | See the PBXSourceTree enumeration. |  |

例子:

```text
/* Begin PBXVariantGroup section */
        1785371325DE0B7D00CDC6D9 /* Main.storyboard */ = {
            isa = PBXVariantGroup;
            children = (
                1785371425DE0B7D00CDC6D9 /* Base */,
                8473E87B26677FFD0029BA9E /* zh-Hans */,
            );
            name = Main.storyboard;
            sourceTree = "<group>";
        };
/* End PBXVariantGroup section */
```

#### PBXTarget

**PBXAggregateTarget**

This is the element for a build target that aggregates several others.

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXAggregateTarget | Empty |  |
| buildConfigurationList | Reference | An element reference | The object is a reference to a XCConfigurationList element. |
| buildPhases | List | A list of element reference | The objects are a reference to a PBXBuildPhase element. |
| dependencies | List | 依赖的引用列表 | The objects are a reference to a PBXTargetDependency element. |
| name | String | target的名称 |  |
| productName | String | The product name. |  |

例子：

```text
/* Begin PBXAggregateTarget section */
        8473E8B9266880620029BA9E /* test */ = {
            isa = PBXAggregateTarget;
            buildConfigurationList = 8473E8BC266880630029BA9E /* Build configuration list for PBXAggregateTarget "test" */;
            buildPhases = (
            );
            dependencies = (
            );
            name = test;
            productName = test;
        };
/* End PBXAggregateTarget section */
```

**PBXLegacyTarget**

MISSING

**PBXNativeTarget**

该文件是用来描述一个target的相关的信息

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXNativeTarget | Empty |  |
| buildConfigurationList | Reference | An element reference | The object is a reference to a XCConfigurationList element. |
| buildPhases | List | A list of element reference | The objects are a reference to a PBXBuildPhase element. |
| dependencies | List | A list of element reference | The objects are a reference to a PBXTargetDependency element. |
| name | String | The name of the target. |  |
| productInstallPath | String | The product install path. |  |
| productName | String | The product name. |  |
| productReference | Reference | An element reference | The object is a reference to a PBXFileReference element. |
| productType | String |  | See the PBXProductType enumeration. |

例子:

```text
/* Begin PBXNativeTarget section */
        1785370625DE0B7D00CDC6D9 /* LSMetricsSample */ = {
            isa = PBXNativeTarget;
            buildConfigurationList = 1785373625DE0B7F00CDC6D9 /* Build configuration list for PBXNativeTarget "LSMetricsSample" */;
            buildPhases = (
                9516402D9EA76B0B6596FD68 /* [CP] Check Pods Manifest.lock */,
                84C1BE2A2668843500B5A67F /* Headers */,
                1785370325DE0B7D00CDC6D9 /* Sources */,
                1785370425DE0B7D00CDC6D9 /* Frameworks */,
                1785370525DE0B7D00CDC6D9 /* Resources */,
                BE39479C32F04E5B5C06E62C /* [CP] Embed Pods Frameworks */,
                84C1BE222668842900B5A67F /* CopyFiles */,
                84C1BE232668842D00B5A67F /* ShellScript */,
            );
            buildRules = (
            );
            dependencies = (
            );
            name = LSMetricsSample;
            productName = LSMetricsSample1;
            productReference = 1785370725DE0B7D00CDC6D9 /* LSMetricsSample.app */;
            productType = "com.apple.product-type.application";
        };
/* End PBXNativeTarget section */
```

#### PBXProject

该元素是用来描述一个project的相关的信息

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXProject | Empty |  |
| buildConfigurationList | Reference | An element reference | The object is a reference to a XCConfigurationList element. |
| compatibilityVersion | String | A string representation of the XcodeCompatibilityVersion. |  |
| developmentRegion | String |  | The region of development. |
| hasScannedForEncodings | Number | 0 or 1 | Whether file encodings have been scanned. |
| knownRegions | List | A list of string | The known regions for localized files. |
| mainGroup | Reference | An element reference | The object is a reference to a PBXGroup element. |
| productRefGroup | Reference | An element reference | The object is a reference to a PBXGroup element. |
| projectDirPath | String | The relative path of the project. |  |
| projectReferences | Array of map | Each map in the array contains two keys: ProductGroup and ProjectRef. |  |
| projectRoot | String | The relative root path of the project. |  |
| targets | List | A list of element reference | The objects are a reference to a PBXTarget element. |

例子:

```text
/* Begin PBXProject section */
        178536FF25DE0B7D00CDC6D9 /* Project object */ = {
            isa = PBXProject;
            attributes = {
                LastUpgradeCheck = 1230;
                TargetAttributes = {
                    1785370625DE0B7D00CDC6D9 = {
                        CreatedOnToolsVersion = 12.3;
                    };
                    1785372125DE0B7F00CDC6D9 = {
                        CreatedOnToolsVersion = 12.3;
                        TestTargetID = 1785370625DE0B7D00CDC6D9;
                    };
                    1785372C25DE0B7F00CDC6D9 = {
                        CreatedOnToolsVersion = 12.3;
                        TestTargetID = 1785370625DE0B7D00CDC6D9;
                    };
                    8473E8B9266880620029BA9E = {
                        CreatedOnToolsVersion = 12.5;
                    };
                };
            };
            buildConfigurationList = 1785370225DE0B7D00CDC6D9 /* Build configuration list for PBXProject "LSMetricsSample" */;
            compatibilityVersion = "Xcode 9.3";
            developmentRegion = en;
            hasScannedForEncodings = 0;
            knownRegions = (
                en,
                Base,
                "zh-Hans",
            );
            mainGroup = 178536FE25DE0B7D00CDC6D9;
            productRefGroup = 1785370825DE0B7D00CDC6D9 /* Products */;
            projectDirPath = "";
            projectRoot = "";
            targets = (
                1785370625DE0B7D00CDC6D9 /* LSMetricsSample */,
                1785372125DE0B7F00CDC6D9 /* LSMetricsSampleTests */,
                1785372C25DE0B7F00CDC6D9 /* LSMetricsSampleUITests */,
                8473E8B9266880620029BA9E /* test */,
            );
        };
/* End PBXProject section */
```

#### PBXTargetDependency

这是一个target对另一个target的引用部分

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | PBXTargetDependency | Empty |  |
| target | Reference | An element reference | The object is a reference to a PBXNativeTarget element. |
| targetProxy | Reference | An element reference | The object is a reference to a PBXContainerItemProxy element. |

例子:

```text
/* Begin PBXTargetDependency section */
        1785372425DE0B7F00CDC6D9 /* PBXTargetDependency */ = {
            isa = PBXTargetDependency;
            target = 1785370625DE0B7D00CDC6D9 /* LSMetricsSample */;
            targetProxy = 1785372325DE0B7F00CDC6D9 /* PBXContainerItemProxy */;
        };
        1785372F25DE0B7F00CDC6D9 /* PBXTargetDependency */ = {
            isa = PBXTargetDependency;
            target = 1785370625DE0B7D00CDC6D9 /* LSMetricsSample */;
            targetProxy = 1785372E25DE0B7F00CDC6D9 /* PBXContainerItemProxy */;
        };
/* End PBXTargetDependency section */
```

#### XCBuildConfiguration

编译配置的信息，包含project的配置和target相关的配置

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | XCBuildConfiguration | Empty |  |
| baseConfigurationReference | String | The path to a xcconfig file | 可以引用外部配置的xcconfig |
| buildSettings | Map | A map of build settings. | 基础配置 |
| name |  |  |  |

例子:

```text
/* Begin XCBuildConfiguration section */
        1785373425DE0B7F00CDC6D9 /* Debug */ = {
            isa = XCBuildConfiguration;
            buildSettings = {
                ALWAYS_SEARCH_USER_PATHS = NO;
                CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED = YES;
                CLANG_ANALYZER_NONNULL = YES;
                CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION = YES_AGGRESSIVE;
                CLANG_CXX_LANGUAGE_STANDARD = "gnu++14";
                CLANG_CXX_LIBRARY = "libc++";
                CLANG_ENABLE_MODULES = YES;
                CLANG_ENABLE_OBJC_ARC = YES;
                CLANG_ENABLE_OBJC_WEAK = YES;
                CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING = YES;
                CLANG_WARN_BOOL_CONVERSION = YES;
                CLANG_WARN_COMMA = YES;
                CLANG_WARN_CONSTANT_CONVERSION = YES;
                CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS = YES;
                CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
                CLANG_WARN_DOCUMENTATION_COMMENTS = YES;
                CLANG_WARN_EMPTY_BODY = YES;
                CLANG_WARN_ENUM_CONVERSION = YES;
                CLANG_WARN_INFINITE_RECURSION = YES;
                CLANG_WARN_INT_CONVERSION = YES;
                CLANG_WARN_NON_LITERAL_NULL_CONVERSION = YES;
                CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF = YES;
                CLANG_WARN_OBJC_LITERAL_CONVERSION = YES;
                CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
                CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER = YES;
                CLANG_WARN_RANGE_LOOP_ANALYSIS = YES;
                CLANG_WARN_STRICT_PROTOTYPES = YES;
                CLANG_WARN_SUSPICIOUS_MOVE = YES;
                CLANG_WARN_UNGUARDED_AVAILABILITY = YES_AGGRESSIVE;
                CLANG_WARN_UNREACHABLE_CODE = YES;
                CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
                COPY_PHASE_STRIP = NO;
                DEBUG_INFORMATION_FORMAT = dwarf;
                ENABLE_STRICT_OBJC_MSGSEND = YES;
                ENABLE_TESTABILITY = YES;
                GCC_C_LANGUAGE_STANDARD = gnu11;
                GCC_DYNAMIC_NO_PIC = NO;
                GCC_NO_COMMON_BLOCKS = YES;
                GCC_OPTIMIZATION_LEVEL = 0;
                GCC_PREPROCESSOR_DEFINITIONS = (
                    "DEBUG=1",
                    "$(inherited)",
                );
                GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
                GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
                GCC_WARN_UNDECLARED_SELECTOR = YES;
                GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
                GCC_WARN_UNUSED_FUNCTION = YES;
                GCC_WARN_UNUSED_VARIABLE = YES;
                IPHONEOS_DEPLOYMENT_TARGET = 14.3;
                MTL_ENABLE_DEBUG_INFO = INCLUDE_SOURCE;
                MTL_FAST_MATH = YES;
                ONLY_ACTIVE_ARCH = YES;
                SDKROOT = iphoneos;
            };
            name = Debug;
        };

        1785373725DE0B7F00CDC6D9 /* Debug */ = {
            isa = XCBuildConfiguration;
            baseConfigurationReference = C13343D9F50C3CE448E3B70A /* Pods-LSMetricsSample.debug.xcconfig */;
            buildSettings = {
                ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
                ASSETCATALOG_COMPILER_GLOBAL_ACCENT_COLOR_NAME = AccentColor;
                CODE_SIGN_IDENTITY = "Apple Development";
                CODE_SIGN_STYLE = Automatic;
                DEVELOPMENT_TEAM = 7FYG9D6WTR;
                INFOPLIST_FILE = LSMetricsSample/Info.plist;
                LD_RUNPATH_SEARCH_PATHS = (
                    "$(inherited)",
                    "@executable_path/Frameworks",
                );
                OTHER_CFLAGS = "";
                PRODUCT_BUNDLE_IDENTIFIER = com.lhs7248.LSMetricsSample;
                PRODUCT_NAME = "$(TARGET_NAME)";
                PROVISIONING_PROFILE_SPECIFIER = "";
                TARGETED_DEVICE_FAMILY = 1;
            };
            name = Debug;
        };
        8473E8BA266880630029BA9E /* Debug */ = {
            isa = XCBuildConfiguration;
            buildSettings = {
                CODE_SIGN_STYLE = Automatic;
                DEVELOPMENT_TEAM = 7FYG9D6WTR;
                PRODUCT_NAME = "$(TARGET_NAME)";
            };
            name = Debug;
        };

/* End XCBuildConfiguration section */
```

#### XCConfigurationList

工程配置的列表信息

| **Attribute** | **Type** | **Value** | **Comment** |
| :--- | :--- | :--- | :--- |
| reference | UUID | A 96 bits identifier |  |
| isa | XCConfigurationList | Empty |  |
| buildConfigurations | List | A list of element reference | 引用的配置信息XCBuildConfiguration element. |
| defaultConfigurationIsVisible | Number | 0 |  |
| defaultConfigurationName | String | The default configuration name. |  |

例子:

```text
/* Begin XCConfigurationList section */
        1785370225DE0B7D00CDC6D9 /* Build configuration list for PBXProject "LSMetricsSample" */ = {
            isa = XCConfigurationList;
            buildConfigurations = (
                1785373425DE0B7F00CDC6D9 /* Debug */,
                1785373525DE0B7F00CDC6D9 /* Release */,
            );
            defaultConfigurationIsVisible = 0;
            defaultConfigurationName = Release;
        };
        1785373625DE0B7F00CDC6D9 /* Build configuration list for PBXNativeTarget "LSMetricsSample" */ = {
            isa = XCConfigurationList;
            buildConfigurations = (
                1785373725DE0B7F00CDC6D9 /* Debug */,
                1785373825DE0B7F00CDC6D9 /* Release */,
            );
            defaultConfigurationIsVisible = 0;
            defaultConfigurationName = Release;
        };
/* End XCConfigurationList section */
```

#### 参考

[Monobjc.Tools](https://github.com/Monobjc/monobjc-tools/blob/master/Monobjc.Tools/Xcode/PBXProductType.cs)[xcode-project-file-format](http://www.monobjc.net/xcode-project-file-format.html)

